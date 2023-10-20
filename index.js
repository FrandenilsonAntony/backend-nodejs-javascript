const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Aperfeiçoando Backend with JavaScript, Nodejs, VScode, CodeSpace and Github')
})

app.get('/oi', function (req, res) {
  res.send('Cada gota salubre desperta o encanto pelo teu sorriso...')
})


//CRUD  de lista de DevMon

const items = ["Java", "Android", "Kotlin", "Express", "NestJS"]

//READ ALL-[GET] /itens

app.get("/items", function (req, res){
   res.send(items)
})



app.listen(3000, function(){
  console.log("App running on http://localhost:3000")
})