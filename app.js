const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

const postsRoute = require('./routes/posts')

require('dotenv/config')

mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("Connected");
})

//Middleware
app.use('/posts', postsRoute)

//Routes
app.get('/', (req,res)=>{
    res.send('Hai')
})

app.listen(5000)