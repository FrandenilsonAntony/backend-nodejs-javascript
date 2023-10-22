const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const url = 'mongodb+srv://admin:L3e82M33940zifIx@backend-nodejsjavascrip.e2asrei.mongodb.net'
const client = new MongoClient(url)
const dbName = 'db-backend-nodejs-express'

async function main () {
  //Conexão com Banco de Dados
  console.info("Connecting Data Base...")
  await client.connect()
  console.info("Database connected successfully!") 

  const db = client.db(dbName)
  const collection = db.collection('items')
  
  
    
  //inicialização do express
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
  //const items = ["Java", "Android", "Kotlin", "Express", "NestJS"]

  const items = [
    {
     
    },
    {
      "id": 2,
      "name": "Kotlin"
    }
  ]


  // READ ALL - [GET] /items
  app.get("/items", async function (req, res){
    const documents = await collection.find().toArray()

    res.send(documents)
  })


  // READ BY ID - [GET] /items/:id/
  app.get("/items/:id", async function (req, res) {
    //Acessamos o parâmetro de rota ID
    //Subtraí 1 para corrigir a ordem de início da lista
    const id = req.params.id
    
    //Acessmos o item da lista a partir do index.js
    //const item = items.find(function (elemento){
    //  return elemento.id === id
    //})
    
    //Buscamos o documento na Colletion
    const item = await collection.findOne({
      _id: new ObjectId(id)
    })
    
    //Exibe o item obtido
    res.send(item)
  })


  // CREATE - [POST] /items
  app.post("/items", async function (req, res){
    //Extrair informação do requerie of body
    const item = req.body

    if (!item || !item.empresa || !item.cargo) {
      return res.status(400).send({
        message: "Empresa & Cargo are required"
      })
    }

    //item.id = items.length + 1

    //Insero ela na lista
    //items.push(item)

    // Inserir o item na Colletion
    await collection.insertOne(item)

    //Sended message of successfully
    res.status(201).send(item)
  })


  // UPDATE - [PUT] /items/:id
  app.put("/items/:id", async function (req, res){
    //Acessamos o parâmetro de rota ID
    //Subtraí 1 para corrigir a ordem de início da lista
    const id = req.params.id
    
    //obrtemos o novo item a partir of body of required 
    const newItem = req.body
    
    //Colocamos o novo item na mesma posição do item anterior.
    //const index = items.findIndex(function (elemento){
    //return elemento.id === id 
    // })

    //items[index] = {
    //  ...newItem,
    //  id,
    //}
    
    //Atualizar o documento na Collection
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: newItem }
    )


    //Envia mensagem de sucesso!
    res.send(newItem)
  })


  // DELETE - [DELETE] /items/:id
  app.delete("/items/:id", async function (req, res){
    //Acessamos o parâmetro de rota ID
    //Subtraí 1 para corrigir a ordem de início da lista
    const id = req.params.id

    //const index = items.findIndex(function (elemento){
    //  return elemento.id === id
    //})
    
    //Exclui a informação através do 'id'
    //delete items[index]

    await collection.deleteOne({ _id: new ObjectId(id)})

    //Enviamos mensagem de sucesso
    res.send("Item Deleted by id with successfully.")
  })

  const port = process.env.PORT || 3000

  app.listen(port, function () {
    console.log(`App running on http://localhost:${port}`)
  })
}

main()