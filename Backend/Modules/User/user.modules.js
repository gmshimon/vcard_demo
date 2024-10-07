const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const validator = require ('validator')
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name"]
  },
  email: {
    type: String,
    require: [true, 'Please provide the email'],
    validate: [validator.isEmail, 'Please provide a valid email'],
    lowercase: true,
    unique: [true,"Account with this email exists"]
  },
  phone:{
    type:String,
  },
  role: {
    type:String,
    enum:['admin','user'],
    default: 'user'
  },
  imageURL:{
    type: String,
  },
  vcard:{
    type: String,
  }
},{
    timestamps: true
})

const Users = mongoose.model('Users',userSchema);

module.exports = Users;
