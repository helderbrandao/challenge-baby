var express = require('express');
var router = express.Router();
var contBaby = require("../controllers/babies");

/* GET home page. */
router.get('/:gender', function(req, res, next) {
  let babies = contBaby.getBabyName({"gender": req.params.gender });
  res.status(200).json(babies);
});

router.get('/:gender/ethnic/:ethnic', function(req, res, next) {
  let babies = contBaby.getBabyName({"gender": req.params.gender, "ethnic": req.params.ethnic});
  res.status(200).json(babies);
});

module.exports = router;
