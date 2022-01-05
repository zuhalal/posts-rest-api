import express from "express"
const app = express()

//Routes
app.get('/', (req,res)=>{
    res.send('Hai')
})

export default app