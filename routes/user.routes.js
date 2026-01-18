const express = require("express");
const router = express.Router();

const { listarUsuarios } = require("../controllers/user.controller");

router.get("/", listarUsuarios);

module.exports = router;