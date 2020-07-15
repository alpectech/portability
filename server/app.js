require('dotenv').config()
const express = require('express')
const enableCORS = require('./CORS')

const app = express()

app.use(enableCORS)

app.get('/key', (req, res) => {
  const key = process.env.GOOGLE_API_KEY
  res.json(JSON.stringify({
    key: key
  }))
})

const port = process.env.HTTP_PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))
