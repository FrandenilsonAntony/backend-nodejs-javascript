const express = require('express')
const app = express()

//Sinaliza for the Express what the body of require will be ever in Json
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Aperfeiçoando Backend with JavaScript, Nodejs, VScode, CodeSpace and Github')
})

app.get('/oi', function (req, res) {
  res.send('Cada gota salubre desperta o encanto pelo teu sorriso...')
})


//CRUD  de lista de DevMon

const items = ["Java", "Android", "Kotlin", "Express", "NestJS"]

//READ ALL - [GET] /items

app.get("/items", function (req, res){
   res.send(items)
})

// CREATE - [POST] /items
app.post("/items", function (req, res){
  //Extrair informação do requerie of body
  const item = req.body.name

  //Insero ela na lista
  items.push(item)

  //Sended message of successfully
  res.send("Items created with successfully.")
})

app.listen(3000, function(){
  console.log("App running on http://localhost:3000")
})