const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'root'
const DB_PASSWORD = 'p@ss'

mysql.createConnection({
	user : DB_USERNAME,
	password : DB_PASSWORD
})
.then(async (connection) => {
	await connection.query('DROP DATABASE IF EXISTS tw_exam')
	await connection.query('CREATE DATABASE IF NOT EXISTS tw_exam')
})
.catch((err) => {
	console.warn(err.stack)
})

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD,{
	dialect : 'mysql',
	logging: false,
	define: {
    	timestamps: false
	},
})

let Author = sequelize.define('author', {
	name : Sequelize.STRING,
	email : Sequelize.STRING,
	address : Sequelize.STRING,
	age : Sequelize.INTEGER
})

let Book = sequelize.define('book', {
	title : Sequelize.STRING,
	pages : Sequelize.INTEGER 
})

Author.hasMany(Book)

const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
	try{
		await sequelize.sync({force : true})
		for (let i = 0; i < 10; i++){
			let author = new Author({
				name : 'name ' + i,
				email : 'name' + i + '@nowhere.com',
				address : 'some address on ' + i + 'th street'
			})
			await author.save()
		}
		res.status(201).json({message : 'created'})
	}
	catch(err){
		console.warn(err.stack)
		res.status(500).json({message : 'server error'})
	}
})

app.get('/authors', async (req, res) => {
	// should get all authors
	try{
		let authors = await Author.findAll()
		res.status(200).json(authors)
	}
	catch(err){
		console.warn(err.stack)
		res.status(500).json({message : 'server error'})		
	}
})

app.post('/authors', async (req, res) => {
	try{
		let author = new Author(req.body)
		await author.save()
		res.status(201).json({message : 'created'})
	}
	catch(err){
		// console.warn(err.stack)
		res.status(500).json({message : 'server error'})		
	}
})

app.post('/authors/:id/books', async (req, res) => {
        try{
           
            await Author.findOne({where:{ id:req.params.id}})
            .then(async result =>{
                  if(result!==null){ 
                let book = new Book(req.body);
                book.authorId=req.params.id;
                await book.save()
                res.status(201).send({message:"created"})
                  }else{
                       res.status(404).send({message:"not found"})
                  }
            })
           .catch(()=>{
                res.status(404).send({message:"error"})
           })
            
           
        }
        catch(err){
            res.status(500).send({message:"Error"})
        }
})

app.get('/authors/:id/books', async (req, res) => {
    try{
       
        await Book.findAll({where: {authorId : req.params.id}})
        .then(result =>{
              if(result.length>0){
              res.status(200).send(result)
              }
              else res.status(404).send({message:"not found"})
                  
              })
      .catch(()=>{
           res.status(404).send({message:"not found"})
      })
          
      
    }
    catch(err){
        res.status(500).send({message:"error"})
    }
})


app.listen(8080)

module.exports = app