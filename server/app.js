import express from "express"
import  "dotenv/config"

const app = express();


app.get("/",(req,res)=>{
   res.json({msg:"worked"})
})


const port = process.env.PORT || 6000;
app.listen(port,()=>{
    console.log("Port is Running on "+port)
})
