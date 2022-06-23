const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const knex = require('knex')({
  client: 'pg',
  version: '14',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : '(wsad)',
    database : 'postgres'
  }
});
const app=express();
app.use(bodyParser.json());
app.use(cors());

app.post('/register',(req,res)=>{
    const {name,email,regNo}=req.body;
    knex.select('regNo').from('user_info')
    .where('regNo','=',regNo)
    .then(data=>{
      if(typeof data[0]=== 'undefined'){
        knex('user_info').insert({
        name:name,
        email:email,
        regNo:regNo
      }).then(console.log);
        res.status(200).json("User Registered Successfully!");
      }
      else{
        res.status(400).json("User Already Exists!");
      }
    }).then(console.log);
    console.log("Registering user............done!!");
});
app.listen(3000,()=>{
    console.log("Server is sucessfully running on port 3000")
});