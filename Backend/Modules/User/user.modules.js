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
  password:{
    type: String,
    required: [true, 'Please provide the password'],
    validator: value => {
      validator.isStrongPassword(value, {
        minLength: 6
      })
    }
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

userSchema.pre('save', function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (!err) {
        this.password = hash
        next()
      }
      if (err) console.log(err);
    })
  })
})


const Users = mongoose.model('Users',userSchema);

module.exports = Users;
