var express = require('express');
var router = express.Router();
var contBaby = require("../controllers/babies");

/* GET home page. */
router.get('/:gender', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //console.log(`gender ${ req.params.gender}`);
  let babies = contBaby.getBabyName(req.params.gender);
  res.status(200).json(babies);
});

module.exports = router;
