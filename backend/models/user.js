const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, minlength: 3, maxlength: 30, required: true },
    email: { type: String, unique: true, minlength: 3, maxlength: 30, required: true },
    password: { type: String, minlength: 3, maxlength: 1024, required: true }
})

const User = mongoose.model("User", userSchema)
exports.User = User