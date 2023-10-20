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


// READ ALL - [GET] /items
app.get("/items", function (req, res){
   res.send(items.filter(Boolean))
})


// READ BY ID - [GET] /items/:id/
app.get("/items/:id", function (req, res) {
   //Acessamos o parâmetro de rota ID
   //Subtraí 1 para corrigir a ordem de início da lista
   const id = req.params.id -1
   
   //Acessmos o item da lista a partir do index.js
   const item = items[id]
  
   //Exibe o item obtido
  res.send(item)
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


// UPDATE - [PUT] /items/:id
app.put("/items/:id", function (req, res){
  //Acessamos o parâmetro de rota ID
   //Subtraí 1 para corrigir a ordem de início da lista
  const id = req.params.id -1
  
  //obrtemos o novo item a partir of body of required 
  const newItem = req.body.name 
   
  //Colocamos o novo item na mesma posição do item anterior.
  items[id] = newItem
   
  //Envia mensagem de sucesso!
  res.send(" Item Update by id successfully.")
})


// DELETE - [DELETE] /items/:id
app.delete("/items/:id", function (req, res){
  //Acessamos o parâmetro de rota ID
   //Subtraí 1 para corrigir a ordem de início da lista
  const id = req.params.id -1
  
  //Exclui a informação através do 'id'
  delete items[id]

  //Enviamos mensagem de sucesso
  res.send("Item Deleted by id with successfully.")
})


app.listen(3000, function(){
  console.log("App running on http://localhost:3000")
})