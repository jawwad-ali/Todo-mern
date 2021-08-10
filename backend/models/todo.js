const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 200 },
  author: {type:String , minlength:3 , maxlength:30},
  uid: String,
  isComplete: Boolean,
  date: { type: Date, default: new Date() },
})

// Model
const Todo = mongoose.model('todo', todoSchema)
exports.Todo = Todo
