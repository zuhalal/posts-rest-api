import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import dontEnv from 'dotenv/config'
import router from "./routes/route.js"

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("Connected");
})

//Middleware
app.use('/api', router)

app.listen(5000)