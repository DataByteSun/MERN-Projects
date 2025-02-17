require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutsroutes = require('./routes/workouts')

// Express app
const app = express()

//Middleware
app.use(express.json())
app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
}) 


//Routes
app.use('/api/workouts', workoutsroutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        // Listen for requests 
app.listen(process.env.PORT, () => {
    console.log("Connected to DB and listening on Port: ", process.env.PORT)
})
})
    .catch((error)=> {
        console.log(error)
    })

