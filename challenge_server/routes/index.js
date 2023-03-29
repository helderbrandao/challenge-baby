var express = require('express');
var router = express.Router();
var contBaby = require("../controllers/babies");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  let babies = contBaby.getBabyName();
  res.json(babies);
});

module.exports = router;
