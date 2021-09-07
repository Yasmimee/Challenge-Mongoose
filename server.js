const Router  = require('./routes/contact')
const express=require('express')
const connectDB = require('./config/connectDB')
require('dotenv').config()

const app=express()
app.use(express.json())


connectDB()

// app.get('/', (req,res)=>{
//     res.send('hello')
// })

app.use('/api/contacts', Router)
const port=5000
app.listen( port, ()=> 
console.log(`server is running on port ${port}`))