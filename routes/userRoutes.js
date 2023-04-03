const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

router.get("/:id", (req, res) => {
  console.log(req, res);
  Controllers.userController.getUser(req, res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createUsers(req.body, res); //
});

// router.put("/:id", (req, res) => {
//   console.log(req.params, req.body);
//   Controllers.userController.updateUser(req, res);
// });

router.put("/", (req, res) => {
  console.log(req.params, req.body);
  Controllers.userController.updateUser(req.body, res);
});

router.delete("/delete/:id", (req, res) => {
  console.log(req, res);
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
