var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render(`Math.cos() applied to {x} is {y}`);
});

module.exports = router;
