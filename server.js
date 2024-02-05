// require('dotenv').config()
import express from "express";

// express app
const app = express();
const port = process.env.PORT || 3000

// routes
app.get("/", (req,res)=>{
    res.json({
        msg:"Welllcooome...."
    });
})

// listen for requests
app.listen(port, ()=>{
    console.log("listening on port", port);
})