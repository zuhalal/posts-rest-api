import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import postsRoute from './routes/posts.js'
import dontEnv from 'dotenv/config'
import homeRoute from "./routes/index.js"

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("Connected");
})

//Middleware
app.use('/posts', postsRoute)
app.use('/', homeRoute)

app.listen(5000)