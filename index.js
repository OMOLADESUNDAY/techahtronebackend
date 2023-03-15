const express=require('express')
const {router}=require('./route/info')


require('dotenv').config()
//app config
const app=express()

//middleware
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use("/api/post", router);
//db config



const port = process.env.PORT || 5000;
//Listener
const start=async()=>{
    try {
       
        app.listen(port, () => console.log(`listening at port ${port}`));    
    } catch (error) {
        console.log(error)
    }
}

start()
