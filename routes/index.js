import express from "express"
const app = express()

//Routes
app.get('/', (req,res)=>{
    res.send('Ok')
})

export default app