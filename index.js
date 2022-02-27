const dotenv = require("dotenv").config();
const express = require("express")
const cors = require("cors")
const server = express()
const port = process.env.PORT || 9001;

console.log("Its alive!!")

server.use(cors());
server.use(express.json());

server.use("/api/*", (req, res) => {
    res.json({
        message: "Server is running on ${port} YAY!!"
    })
})

server.listen(port, () => {
    console.log(`Success!! Server is running on ${port}`)
})

// console.log(process.env.APIKEY)
// console.log(process.env.DBPASS)
// console.log(process.env.PORT)