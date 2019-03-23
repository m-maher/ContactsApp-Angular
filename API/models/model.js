const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    firstName:String,
    lastName:String,
    code:Number,
    phone:Number,
    email:String,
    image:String
})

module.exports = mongoose.model('contact', contactSchema ,'contacts')