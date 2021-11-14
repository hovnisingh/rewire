

const express = require('express')


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var admin = require("firebase-admin");

const app = express()



// Initialize Firebase
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

app.get('/reset', function (req, res) {
  res.sendFile(__dirname + '/html/reset.html');
})


