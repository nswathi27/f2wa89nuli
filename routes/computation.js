var express = require('express');
var router = express.Router();

 var min = 20;
var max = 24;


/* GET mydata page. */

var rand1 = Math.random() * (max - min) + min;

router.get('/', function(req, res, next) {

 if(req.query.x!=undefined) x =req.query.x;
else x=rand1;

var math_result = Math.sinh(x);

  
  res.render('computation', {x:x, math_result:math_result});
});

module.exports = router;
