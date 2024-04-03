var cat = require('../models/cat');
// List of all Costumes
// List of all Costumes
exports.cat_list = async function(req, res) {
    try{
    theCostumes = await cat.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle a show all view
exports.cat_view_all_Page = async function(req, res) {
    try{
    theCostumes = await cat.find();
    res.render('cat', { title: 'Cat Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };    

// exports.cat_list = function(req, res) {
// res.send('NOT IMPLEMENTED: cat list');
// };
// for a specific Costume.
exports.cat_detail = function(req, res) {
res.send('NOT IMPLEMENTED: cat detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.cat_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: cat create POST');
};
// Handle Costume delete from on DELETE.
exports.cat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: cat delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.cat_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: cat update PUT' + req.params.id);
};

// VIEWS
