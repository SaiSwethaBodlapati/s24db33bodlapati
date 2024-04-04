var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/cat');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/cat', costume_controller.cat_create_post);
// DELETE request to delete Costume.
router.delete('/cat/:id', costume_controller.cat_delete);
// PUT request to update Costume.
router.post('/cat/:id', costume_controller.cat_update_put);
// GET request for one Costume
router.get('/cat/:id', costume_controller.cat_detail);
// GET request for list of all Costume items.
router.get('/cat', costume_controller.cat_list);



module.exports = router;

