const express = require("express")
console.log(typeof express)

const app = express()



app.get("/", (req, res) => {
    res.send("Hello from the express server")
})

// Starting the express server

app.listen(8000, () => {
    console.log("Server got started");
})