const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique:1
    },
    password: {
        type: String,
        maxlength: 5
    },
    role: {
        type: Number,
        default: 0
    },
    image:String,
    token: {
        type: String
    },
    tokenExp: {
        type: String
    },
})

const User = mongoose.model('User',UserSchema)

//다른고셍서도 쓸수 있다.
module.exports={ User }