const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
cat_color: String,
cat_breed: {type:String,lenght:15},
cat_price:{type:Number,min:1000,max:200000}
})
module.exports = mongoose.model("cat",costumeSchema)