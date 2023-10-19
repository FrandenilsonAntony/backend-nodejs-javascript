const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Aperfeiçoando Backend with JavaScript, Nodejs, VScode, CodeSpace and Github')
})

app.listen(3000)