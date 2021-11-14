const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/login.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



app.get('/css/style.css', function (req, res) {
  res.sendFile(__dirname + '/html/css/style.css');
})

app.get('/js/jquery.min.js', function (req, res) {
  res.sendFile(__dirname + '/html/js/jquery.min.js');
})
app.get('/js/popper.js', function (req, res) {
  res.sendFile(__dirname + '/html/js/popper.js');
})

app.get('/js/main.js"', function (req, res) {
  res.sendFile(__dirname + '/js/main.js"');
})

app.get('/js/bootstrap.min.js', function (req, res) {
  res.sendFile(__dirname + '/html/js/bootstrap.min.js');
})

app.get('/images/bb.jpeg', function (req, res) {
  res.sendFile(__dirname + '/html/images/bb.jpeg');
})


app.get('/js/popper.min.js.map', function (req, res) {
  res.sendFile(__dirname + '/html/js/popper.min.js.map');
})



app.get('/js/bootstrap.min.js.map', function (req, res) {
  res.sendFile(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js.map');
})
