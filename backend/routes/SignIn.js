const Joi = require("joi")
const express = require("express")
const router = express.Router()
const { User } = require("../models/user")
const bycrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()
const secretKey = process.env.SECRET_KEY

router.post("/", async (req, res) => {
    try {

        // Joi validation
        const schema = Joi.object({
            email: Joi.string().min(3).max(200).email().required(),
            password: Joi.string().min(6).max(200).required()
        })
        const { error } = schema.validate(req.body)
        if (error) return res.status(404).send(error.details[0].message)

        // Check if USER already exists
        let user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(400).send("invalid Email or Password")

        // valiadtion the correct password
        const validPassword = await bycrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send("invalid Email or Password")

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