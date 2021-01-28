const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const whatsappSchema = new Schema({
  message:String,
  name:String,
  timestamps:String,
  recieve: Boolean,
})
 
const Whatapp  = mongoose.model('whatsapp', whatsappSchema);
module.exports =Whatapp