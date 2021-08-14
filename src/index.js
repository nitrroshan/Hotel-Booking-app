const express=require('express')
require('./db/mongoose')
const path=require('path')
const hbs=require('hbs')
const userRouter=require('./routers/user')

const app=express()

const viewsPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')
const publicDirectoryPath=path.join(__dirname,'../public')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(userRouter)

app.get('/',(req,res)=>{
    res.render('index',{
        title: 'Hotel Management'
    });
})
app.get('/registration',(req,res)=>{
    res.render('registration',{
        title: 'Registration'
    });
})

app.get('/login',(req,res)=>{
    res.render('Login',{
        title: 'Login'
    });
})


app.listen(3000,()=>{
    console.log('Server is up on Port '+3000)
})