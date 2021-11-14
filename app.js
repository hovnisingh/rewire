const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/login.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/style.css', function (req, res) {
  res.sendFile(__dirname + '/html/style.css');
})

app.get('/images/dd.png', function (req, res) {
  res.sendFile(__dirname + '/html/images/dd.png');
})



app.get('/register', function (req, res) {
  res.sendFile(__dirname + '/html/register.html');
})