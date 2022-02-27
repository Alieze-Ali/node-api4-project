const dotenv = require("dotenv").config();
const express = require("express")
const cors = require("cors")

const server = express()
const port = process.env.PORT || 9001;

// console.log("Its alive!!")
// console.log(process.env.PORT, process.env.NODE_ENV)

server.use(cors());
server.use(express.json());


server.get("/api/hello", (req, res) => {
    res.json({
        message: "api is working!"
    })
})

server.use("/api/*", (req, res) => {
    res.send(`<h1>Hello world!</h1`)
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.messge,
        stack: err.stack,
    })
})

// ??? What is a stack???

server.listen(port, () => {
    console.log(`Success!! Server is running on ${port}`)
})

// console.log(process.env.APIKEY)
// console.log(process.env.DBPASS)
// console.log(process.env.PORT)