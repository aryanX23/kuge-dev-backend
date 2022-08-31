const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema= new Schema({
    user_name: {
        type: String,
        required:true
    },
    user_email: {
        type: String,
        required:true
    },
    register_number:{
        type: String,
        required:true
    }
});
module.exports=mongoose.model('register_details',userSchema);