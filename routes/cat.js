var express = require('express');
var costume_controller = require('../controllers/cat');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cat', { title: 'Search Results Cats' });
});
var express = require('express');
var costume_controller = require('../controllers/cat');
var router = express.Router();

router.get('/', costume_controller.cat_view_all_Page );

/* GET detail costume page */
router.get('/detail', costume_controller.cat_view_one_Page);
/* GET create costume page */
router.get('/create', costume_controller.cat_create_Page);
/* GET create update page */
router.get('/update', costume_controller.cat_update_Page);


module.exports = router;

