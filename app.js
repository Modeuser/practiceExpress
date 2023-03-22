const express = require('express')
const app = express()

// home page (root)
app.get('/',(req,res)=>{
    res.send('Home page')
})

app.get('/about',(req,res)=>{
    res.send('About page')
})

app.listen(5012,()=>{
    console.log('server is listening on port 5012')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.used (for middle ware)
//app.listen