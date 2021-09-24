var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */

router.get('/', function (req, res, next) {

  res.render('index', { title: 'Express' });

});
router.get('/file', function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/images/drawing.png"));
});

module.exports = router;
