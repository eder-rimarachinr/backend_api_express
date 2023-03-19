require('dotenv').config()
const express = require('express')
const cors = require('cors');
const dbConnect = require('./config/mongo')
const app = express()

const routes = require('./routes')

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

// METHODS HTTP

app.use('/api', routes)

app.listen(PORT, () => (
  console.log(`Server running on PORT: ${PORT}`)
))

dbConnect()