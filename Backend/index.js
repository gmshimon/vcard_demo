const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const { query } = require('express')
require('dotenv').config()
const path = require('path')

const port = process.env.PORT || 5000
// Middleware
const app = express()
app.use(cors())
app.use(express.json())

// const uri = "mongodb+srv://vcard_user:Kola9696@cluster0.in8lp.mongodb.net/vcard_demo?retryWrites=true&w=majority&appName=Cluster0";

const uri = 'mongodb://localhost:27017/vcard_demo'

mongoose.connect(uri).then(() => {
  console.log('Database connected successfully')
})

const userRouter = require('./Modules/User/user.routes.js')

app.get('/', (req, res) => {
  res.send('server is running')
})

app.get('/images/:filename', (req, res) => {
  const { filename } = req.params
  const imagePath = path.join(__dirname, './images', filename)

  res.sendFile(imagePath)
})

app.get('/vCards/:filename', (req, res) => {
  const { filename } = req.params
  const vCardPath = path.join(__dirname, './vCards', filename)
  res.sendFile(vCardPath)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
  app.use('/api/v1/user', userRouter)
})

module.exports = app
