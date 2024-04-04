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
// exports.cat_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: cat create POST');
// };
// Handle Costume delete from on DELETE.
exports.cat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: cat delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.cat_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: cat update PUT' + req.params.id);
    };



// VIEWS
// Handle Costume create on POST.
exports.cat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new cat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.cat_color = req.body.cat_color;
    document.cat_breed = req.body.cat_breed;
    document.cat_price = req.body.cat_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
