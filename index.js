const express=require("express");
const app= express();
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(cors());
app.use(bodyParser.json());


app.get('/test',(req,res)=>{
    res.status(200).json({
        message:"On test route"
    })
})
app.post('/signup',(req,res)=>{
    res.status(200).json({
        message:" got sign up post request"
    })
})

app.listen(8080,()=>{
    console.log("Server started in port 8080");
})
