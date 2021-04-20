const express=require('express')
const port= process.env.PORT || 5000
const app= express()

app.get('/',(req,res) =>{
    res.send('hello   world :)')
})

app.get('/profile',(req,res) =>{
    res.send('Welcome to profile page :)')
})

app.listen(port,()=>{
    console.log(`server is up and running at: http://127.0.0.1:${port}`)
})