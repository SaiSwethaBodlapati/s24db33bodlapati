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
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.get('/', costume_controller.cat_view_all_Page );

/* GET detail costume page */
router.get('/detail',secured, costume_controller.cat_view_one_Page);
/* GET create costume page */
router.get('/create',secured, costume_controller.cat_create_Page);
/* GET create update page */
router.get('/update', secured,costume_controller.cat_update_Page);

/* GET delete cat page */
router.get('/delete',secured,costume_controller.cat_delete_Page);

module.exports = router;

