const express = require ("express")
const app = express()

app.get ('/', function(req,res){
res.send ("Olá Rafael")
})

app.get('/msg', function(req,res){
    res.send ("Essa mensagem é automática")
})

app.get('/sobre', function(req,res){
    res.send ("Essa página esta sendo desenvolvida por Rafael")
}) 

app.listen(3000, function(){
    console.log ("Conexão inicializada")
})
