const Users = require('./user.modules')
const fs = require('fs')
const path = require('path')
const generateVCard = require('../../Middleware/vcard/vcard')
const { generateToken } = require('../../Middleware/Token/generateToken')
const bcrypt = require('bcrypt');

const deleteImage = file => {
  const filePath = path.join(__dirname, '../../images', file)
  fs.unlink(filePath, unlinkError => {
    if (unlinkError) {
      console.error('Failed to delete the uploaded file:', unlinkError)
    } else {
      console.log('Uploaded file deleted successfully.')
    }
  })
}
const deleteVCard = file => {
  const filePath = path.join(__dirname, '../../vCards', file)
  fs.unlink(filePath, unlinkError => {
    if (unlinkError) {
      console.error('Failed to delete the uploaded file:', unlinkError)
    } else {
      console.log('Uploaded file deleted successfully.')
    }
  })
}

module.exports.registerUser = async(req,res,next)=>{
  try {
    const data = req.body
    const result = await Users.create(data)

    res.status(200).json({
      status: 'Success',
      message: 'Data successfully saved',
      data: result
    })
  } catch (error) {
    res.status(400).json({
      status: 'Failed',
      message: error
    })
  }
}

module.exports.loginUser = async(req,res,next)=>{
  try {
    const{email,pass} = req.body

    if (!email || !pass) {
      return res.status(403).json({
        status: 'Fail',
        message: 'Please provide credentials'
      })
    }

    const user = await Users.findOne({ email })
    if (!user) {
      return res.status(404).json({
        status: 'Fail',
        message: 'No user with this email'
      })
    }

    const isPasswordValid = bcrypt.compareSync(pass, user.password)
    if (!isPasswordValid) {
      return res.status(403).json({
        status: 'Fail',
        message: 'Wrong Credentials'
      })
    }

    const {accessToken} = generateToken(user)
    
    const{password,...others} = user.toObject()
    res.status(200).json({
      status: 'Success',
      message: 'Login successful',
      data: others,
      accessToken: accessToken,
    })

  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to login',
      error: error.message
    })
  }
}

module.exports.generateVCard = async (req, res, next) => {
  try {
    const data = req.body
    const image =
      req.protocol + '://' + req.get('host') + '/images/' + req.file.filename
    const vcardFileName = generateVCard(data, req.file.filename)
    const vcardURL =
      req.protocol + '://' + req.get('host') + '/vCards/' + vcardFileName

    data.imageURL = image
    data.vcard = vcardURL
    const result = await Users.create(req.body)

    res.status(200).json({
      status: 'Success',
      message: 'Data successfully fetched',
      data: result
    })
  } catch (error) {
    // const fileName = req.body.email + '_vcfFile.vcf'
    // deleteVCard(fileName)
    if (req.file) {
      deleteImage(req.file.filename)
    }
    res.status(400).json({
      status: 'Fail',
      message: error.message
    })
  }
}
