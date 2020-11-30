var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormSchema = Schema({
    gender: {type:String},
    age:{type:Number},
    address:{type:String},
    postalCode:{type:String},
    job:{type:String},
    symptons:{type:Array},
    diagnosis:{type:Array},
    smoke:{type:String},
    test:{type:String},
    date:{type:String},
    where:{type:String},
    infection:{type:String}
  }, {
      collection: 'users'
  })


module.exports = mongoose.model('FormSchema',FormSchema);
