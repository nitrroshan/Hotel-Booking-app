const express = require('express')

const User=require('../models/user')
const router = new express.Router()

router.post('/users/registration',async (req,res)=>{
    const user= new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
    
})

router.post('/users/login',async (req,res)=>{
    console.log(req.body)
    const user= await User.findOne({email: req.body.email})
    res.send(user)

})

module.exports = router