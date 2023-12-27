const express = require("express");
const router = express.Router();
const { signup, login } = require("../Controllers/Auth");
const { createServey, getAllServey,deleteServey } = require("../Controllers/Servey");
//auth
router.post("/signup", signup);
router.post("/login", login);

//serveys
router.post("/createservey", createServey);
router.get("/getallservey", getAllServey);


module.exports = router;
