const express = require("express");
const User = require("../controllers/User.jsx");
const router = express.Router();

router.post("/createUser", User.signUp);
router.post("/login", User.signIn);

module.exports = router;