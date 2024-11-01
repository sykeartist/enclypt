const express= require('express')
const app = express()
const cors= require('cors')
const mongoose= require('mongoose')
const multer= require('multer')
const bodyParser= require('body-parser')
const route = require('./src/Routes/Api')



app.use(cors())
app.use(bodyParser.json())

app.use("/src/Routes/Api.js", route )
app.use("*", (req, res)=>{
    res.status(404).json({message: "Not Found"})
})


// Database connection

const username= "practice"
const password= "practice"
const databaseName= "practice"
const options= { autoIndex:true,}
const uri =`mongodb+srv://${username}:${password}@cluster0.xu0x1b6.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(uri,options)
.then(()=>{
    console.log('conected to mongodb')
})
.catch(error=>{
    console.log('error connecting', error.message)
})







module.exports= app