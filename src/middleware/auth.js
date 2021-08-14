const passport = require('passport')
const LocalStrategy= require('passport-local').Stratergy;
const User = require('../models/user')

const strategy= new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'

},async (username,password,done)=>{
    try{

        const user = await User.findOne({email: username})
        if(!user){
            return done(null,false,{message: 'Incorrect Credentials' })
        }
        if(!user.validPassword(password)){
            return done(null,false,{message: 'Incorrect Credentials'})
        }
        return done(null,true)
    }catch(e){
        done(err)

    }
    
})
passport.use(strategy)