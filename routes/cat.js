var express = require('express');
var costume_controller = require('../controllers/cat');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cat', { title: 'Search Results Cats' });
});

router.get('/', costume_controller.cat_view_all_Page );

module.exports = router;
