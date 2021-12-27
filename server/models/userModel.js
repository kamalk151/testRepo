const Mongoose = require('mongoose')
const userSchema = new Mongoose.Schema({
    first_name : {type:String, required:true, trim:true},
    last_name: {type:String, required:true , trim:true},
    username: {type:String, required:true, trim:true},
    password: {type:String, required:true, trim:true},
    profile_img: String,
    status:{type:Number, default: 1},
    created_at: Date,
    updated_at: Date
})

module.exports = Mongoose.model('users', userSchema)