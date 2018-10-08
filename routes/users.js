var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource\nnew resource from thailand!\n');
});

module.exports = router;
