import express from 'express'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
import { productRouter } from './Routes/productRoutes.js'

dotenv.config()

const app = express()
const PORT = 3000
const URI = process.env.URI  

app.use(express.json())
app.use("/products",productRouter)

app.listen(PORT,()=>{
    console.log(`server is active on ${PORT}`)

    connect(URI).then(()=>console.log("connected to the mongoDB"))
})