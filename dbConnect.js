"use strict"
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, 
                                process.env.DB_USER, 
                                process.env.DB_PASSWORD,
                                {host: process.env.DB_HOST,
                                dialect: "mysql"
                            });

const connectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Successful connection to mySQL database: ${process.env.DB_NAME}`)
    } catch (error) {
        console.log("Unable to connect to database", error);
    }
}

connectMysql();

module.exports = {
    Sequelize: sequelize,
    connectMysql
}