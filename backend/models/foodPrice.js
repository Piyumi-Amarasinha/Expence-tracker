const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const priceSchema = new Schema ({

discription : {
    type : String,
    required : true
},

price : {
    type : Number,
    required : true
},

type : {
    type : String,
    required : true
},

})

const price = mongoose.model("price", priceSchema)

module.exports = price;