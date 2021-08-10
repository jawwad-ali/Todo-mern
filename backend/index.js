const todos = require('./routes/todos')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const signUp = require("./routes/signUp")
const signIn = require("./routes/signIn")
require('dotenv').config()

// Cross origin resource sharing.
app.use(cors())
// incoming request object as a json Object.
app.use(express.json())

// EndPoints
app.use('/api/todos', todos)
app.use("/api/signup", signUp)
app.use("/api/signin", signIn)

const connect_string = process.env.CONNECTION_STRING
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Learn Mern stack')
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

mongoose
  .connect(connect_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log('MongoDB connection established'))
  .catch((error) => console.log('MongoDB connection failed', error.message))