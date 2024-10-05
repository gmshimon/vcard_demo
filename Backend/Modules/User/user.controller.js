const Users = require('./user.modules')
const fs = require('fs')
const path = require('path')
const generateVCard = require('../../Middleware/vcard/vcard')

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
