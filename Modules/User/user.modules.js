const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone:{
    type:String,
    required: true,
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
