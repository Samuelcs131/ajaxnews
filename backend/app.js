// MODULOS
const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')


// BANCO DE DADOS
const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'blognode'
})

// PERMITIR ACESSO DE API AO BACKEND
app.use(cors())
app.use(express.json())


// ROTAS
    // NOVA NOTICIA
    app.post('/adicionar', (req,res)=>{
    
    let { titulo, descricao, categoria, texto, autor, data } = req.body 

    let querySQL = "INSERT INTO noticias (titulo, descricao,texto,data,categoria,autor) VALUES (?,?,?,?,?,?)"

    database.query(querySQL, [titulo, descricao,texto,data,categoria,autor],(erro, result)=> {
            if(erro == null && result !== undefined){
            res.send('conectado')
            console.log('Cadastrado com sucesso!')
            } else {
            res.send('erro')
            console.log(erro)
            }
    })  
    })

    // TODAS NOTICIAS
    app.get('/noticias', (req,res)=>{
    let querySQL = "SELECT * FROM noticias"

    database.query(querySQL, (erro, result)=> {
        erro ? console.log(erro) : res.send(result)
    }) 
    })

    // APAGAR NOTICIA
    app.delete('/apagar', (req,res)=>{
    let { idnoticias } = req.body

    let querySQL = `DELETE FROM noticias WHERE idnoticias = ${idnoticias}`

    database.query(querySQL, (erro,result)=>{
        erro ? console.log(erro) : res.send('deletado') 
    })
    })

    // ATUALIZAR NOTICIA
    app.put('/atualizar', (req,res)=>{
        let { titulo, descricao, categoria, texto, autor, data, idnoticias } = req.body 
 
       let querySQL = 'UPDATE noticias SET titulo = ?, descricao = ?, categoria = ?, texto = ?, autor = ?, data = ? WHERE idnoticias = ?' 
       database.query(querySQL, [titulo, descricao, categoria, texto, autor, data, idnoticias],(error,result)=>{
        if(error == null && result !== undefined){
            res.send('conectado')
            console.log('Cadastrado com sucesso!')
            } else {
            res.send('erro')
            console.log(error)
            }
       })
    
    })

// PORTA SERVIDOR
const PORT = 3031
app.listen(PORT,()=>{
    console.log(`Servidor conectado na porta ${PORT}`)
})
