const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name : {type : String , require : true},
    age : {type : Number , require : true}
});

module.exports = mongoose.model("Author" , authorSchema);