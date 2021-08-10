const Joi = require("joi")
const express = require("express")
const router = express.Router()
const { User } = require("../models/user")
const bycrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()
const secretKey = process.env.SECRET_KEY

router.post("/", async (req, res) => {
    // Joi validation
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(200).email().required(),
        password: Joi.string().min(6).max(200).required()
    })
    const { error } = schema.validate(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    try {
        // Check if USER already exists
        let user = await User.findOne({ email: req.body.email })
        if (user) return res.status(400).send("User already Exists")

        // Register a new User 
        const { name, email, password } = req.body
        user = new User({
            name, email, password
        })
        const salt = await bycrypt.genSalt(10)
        user.password = await bycrypt.hash(user.password, salt)

        await user.save()
        // sending JWT to client
        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email
        }, secretKey)
        res.send(token)
    }
    catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
})
module.exports = router