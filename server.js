const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require('mongoose');
const cors=require('cors');
const registerUser= require('./registerSchema');
//const session=require('express-session');
//const cookieParser=require('cookie-parser');
//const MongoDBstore=require('connect-mongodb-session')(session);
const dotenv = require('dotenv');   
dotenv.config();
/* IMPORTING PACKAGES */
/* START OF MIDDLEWARE */
const app=express();
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials: true
}));
app.use(bodyParser.json());
/* END OF MIDDLEWARE */
app.post('/register',(req,res)=>{
    console.log("/register");
    const {name,email,regNo}=req.body;
    const user=new registerUser({
        user_name:name,
        user_email:email,
        register_number:regNo
    });
    user.save().then(result=>{
        console.log("Created Entry");
        res.json("User Registered Successfully!");
    }).catch((err)=>{
        res.json("Internal error!");
    });
});
app.get('/',(req,res)=>{
    res.send("Active!");
});
mongoose.connect(process.env.MONGO_URI).then(result=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is successfully running....");
    });
}).catch(console.log);
