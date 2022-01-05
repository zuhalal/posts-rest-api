import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import postsRoute from './routes/posts.js'
import dontEnv from 'dotenv/config'

const app = express()

app.use(cors())
app.use(bodyParser.json())

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