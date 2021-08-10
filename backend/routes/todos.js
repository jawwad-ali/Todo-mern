const { Todo } = require('../models/todo')
const express = require('express')
const router = express.Router()
const Joi = require('joi')
const auth = require("../middleware/auth")

// Router object to handle the request

// List todos
router.get('/', auth, async (req, res) => {
  try {
    // latest added todo will be shown first
    const todos = await Todo.find().sort({ date: -1 })
    res.send(todos)
  } catch (err) {
    res.status(500).send(error.message)
    console.log(error.message)
  }
})

// Create Todos
router.post('/', async (req, res) => {
  // joi validation schema
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3).max(30),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  })

  // validate method
  const { error } = schema.validate(req.body)
  // validation message
  if (error) return res.status(400).send(error.details[0].message)

  // sending request of all the vaiables
  const { name, author, isComplete, date, uid } = req.body

  // this will work when client will make request
  let todo = new Todo({
    name,
    author,
    isComplete,
    date,
    uid,
  })

  //   saving the requested data in database
  try {
    todo = await todo.save()
    res.send(todo)
  } catch (err) {
    console.log(err)
  }
})

// DELETE TODO
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) return res.status(404).send("Todo not found")
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
    res.send(deleteTodo)
  } catch (err) {
    res.status(500).send(error.message)
    console.log(error.message)
  }
})

// UPDATE TODO
router.put("/:id", async (req, res) => {
  // joi validation schema
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3).max(30),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  })

  // validate method
  const { error } = schema.validate(req.body)
  // validation message
  if (error) return res.status(400).send(error.details[0].message)

  // find todo by ID
  try {

    const todo = await Todo.findById(req.params.id)
    if (!todo) return res.status(404).send("Todo not found")

    // if todo exist
    const { name, author, isComplete, date, uid } = req.body

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
      name, author, isComplete, date, uid
      // new:true is sending the updated todo version
    }, { new: true })

    res.send(updatedTodo)
  }
  catch (error) {
    res.status(500).send(error.message)
    console.log(error.message)
  }

})

// PATCH TODO
router.patch("/:id", async (req, res) => {
  try {

    const todo = await Todo.findById(req.params.id)
    if (!todo) return res.status(404).send("Todo not found")

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
      isComplete: !todo.isComplete
    })
    res.send(updatedTodo)
  }
  catch (error) {
    res.status(500).send(error.message)
    console.log(error.message)
  }

})
module.exports = router



// start from 33.06