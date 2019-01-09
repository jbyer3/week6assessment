var express = require("express");

var router = express.Router();
var albums = require("./api/albums.route");

router.use("/albums", albums);

module.exports = router;
