var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/create", function (req, res, next) {
    res.status(200).json(req.body);
});

module.exports = router;
