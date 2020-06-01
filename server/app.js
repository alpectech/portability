require('dotenv').config()
const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/key', (req, res) => {
  const key = process.env.GOOGLE_API_KEY;
  res.json(JSON.stringify({
    key: key
  }))
});

const port = 3000;
app.listen(port, () => console.log(`listening on ${port}`));
