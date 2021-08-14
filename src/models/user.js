const mongoose = require('mongoose')
const validator = require('validator')
const passportLocalMongoose = require('passport-local-mongoose')

const {Schema}=mongoose;

const userSchema=new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: String,
        required: true,
        trim: true,
    },
    contact: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value,{
                strictMode: true})){
                throw new Error('Email is Invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain password')
            }

        }
    },
    address: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        retquired: true,
        trim: true,
    },
    state: {
        type: String,
        retquired: true,
        trim: true,
    },
    country: {
        type: String,
        retquired: true,
        trim: true,
    }
})
userSchema.plugin(passportLocalMongoose)

const User=mongoose.model('User',userSchema);

module.exports=User