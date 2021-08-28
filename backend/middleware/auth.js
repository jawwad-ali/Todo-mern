const jwt = require("jsonwebtoken")
require('dotenv').config()
const secretKey = process.env.SECRET_KEY 

function auth(req, res, next) {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).send("Access denied...")

    try {
        const payload = jwt.verify(token, secretKey)
        req.user = payload
        next()
    }
    catch (err) {
        res.status(400).send("Invalid token")
    }
}
module.exports = auth