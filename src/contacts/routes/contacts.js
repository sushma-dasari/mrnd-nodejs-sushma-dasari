var express = require('express');
var router = express.Router();
var obj= new Array()

/* GET contacts */
router.get('/:id', function(req, res, next) {
id=req.params.id;
res.json(obj[id]);
});

router.post('/', function(req, res, next) {
  obj.push(req.body);
  res.statusCode=200;
  console.log(req.body);
  res.send(obj.length-1+"")
});

router.put('/:id', function(req, res, next) {
  id=req.params.id;
  if (req.body.firstName != undefined)
		obj[id].firstName = req.body.firstName;
	
   res.statusCode = 200;
   res.send(obj[id]);
  //console.log(req.body);

});

module.exports = router;
