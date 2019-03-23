const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3000;

const app = express()

const api = require('./routes/routeAPI')

app.use(bodyParser.json())

app.use(cors())

app.use('/api',api)

const mongoose = require('mongoose')

const db = 'mongodb://localhost/db'

mongoose.connect(db, {useNewUrlParser: true}, (err)=>{
    if(err){
        console.error('Error' + err)
    }else{
        console.log('Connected to mongodb')
    }
})

app.get('/',(req,res)=>{
    res.send('done from server')
})

app.listen(port,()=>{
    console.log('server is running on localhost:'+ port)
})