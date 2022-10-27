var express = require('express');
var router = express.Router();

 var min = 20;
var max = 24;
// var random_value = Math.random() * (max - min) + min; //Generates a random value between min and max-1


// var rand1 = Math.random() * (max - min) + min;
// var rand2 = Math.random() * (max - min) + min;
// var rand3 = Math.random() * (max - min) + min;
// var rand4 = Math.random() * (max - min) + min;

// var abs = Math.abs(rand1);
// var cos = Math.acos(rand2) 
// var sin = Math.sin(rand3);
// var sinh = Math.sinh(rand4);

/* GET mydata page. */

var rand1 = Math.random() * (max - min) + min;

router.get('/', function(req, res, next) {

 if(req.query.x!=undefined) x =req.query.x;
else x=rand1;

var math_result = Math.sinh(x);

  
  res.render('computation', {x:x, math_result:math_result});
});

module.exports = router;
