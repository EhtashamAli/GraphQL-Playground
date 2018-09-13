const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name : {type : String , require : true},
    genre : {type : String , require : true},
    autherId : {type : String , require : true}
});

module.exports = mongoose.model('Book' , BookSchema);