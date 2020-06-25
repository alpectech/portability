require('dotenv').config()
const express = require('express');
const app = express();

//Middleware
// app.use((req, res, next) => {
//   res.set('Content-Security-Policy', "default-src 'self' http://localhost:3000/;img-src *;script-src https://maps.googleapis.com; style-src 'unsafe-inline' https://maps.googleapis.com");
//   console.log('CSP header set...');
//   next();
// });

//Route Handler
app.get('/key', (req, res) => {
  const key = process.env.GOOGLE_API_KEY;
  res.json(JSON.stringify({
    key: key
  }));
  // res.sendFile(__dirname+'/index.html');
});

const port = process.env.HTTP_PORT;
app.listen(port, () => console.log(`listening on ${port}`));
