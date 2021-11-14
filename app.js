const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/login.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



app.get('/images/bb.jpeg', function (req, res) {
  res.sendFile(__dirname + '/html/images/bb.jpeg');
})

