const mongoose = require("mongoose");
const validaor = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validaor.isEmail(value)){
                throw new Error("Invalid Email Id")
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
        min:10
    },
    message:{
        type:String,
        required: true,
        minLength: 3
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// Collection
const User = mongoose.model("User", userSchema);
module.exports = User;