var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource\n NOW THIS IS A FIX!!\n');
});

module.exports = router;
