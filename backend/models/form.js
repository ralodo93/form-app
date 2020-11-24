'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormSchema = Schema({
    gender:String,
    age:Number,
    address:String,
    postalCode:String,
    job:String,
    symptons:Array,
    diagnosis:Array, 
    smoke:String,
    test:String,
    date:String,
    where:String,
    infection:String
});

module.exports = mongoose.model('Form',FormSchema);
// forms --> guarda documentos de este tipo y con esta estructura en la colección