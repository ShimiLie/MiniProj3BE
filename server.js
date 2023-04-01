const express = require("express")
const app = express() 
// initializing backend

require("dotenv").config()

app.use(express.json());


app.get("/", (req, res) => {
    res.json({message: "Doing miniproj 3"})
});

// set port, listen for requests
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Running on ${port}`);
})