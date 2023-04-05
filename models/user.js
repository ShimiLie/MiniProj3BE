const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model {}
//Sequelize will create this table if it doesn't exist on startup
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true, //allow null if you do not add into your useState for addition
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users", //use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = User;
