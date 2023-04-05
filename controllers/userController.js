"use strict";
const Models = require("../models");

const getUsers = (res) => {
  Models.User.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const getUser = (req, res) => {
  console.log(res);
  Models.User.findOne({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createUsers = (data, res) => {
  Models.User.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateUser = (data, res) => {
  Models.User.update(data, { where: { id: data.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
      console.log(data);
    })
    .catch((err) => {
      throw err;
    });
};

const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send(`Data of ${req.params.id} is deleted.`);
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getUsers,
  getUser,
  createUsers,
  updateUser,
  deleteUser,
};
