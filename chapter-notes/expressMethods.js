const express = require('express')
const path = require('path')
const app = express()

// setup static assets and middle ware
app.use(express.static('./public'))


// index can be added to the static public assets folder
// app.get('/',(req,res)=>{
//     // "resolve" is used for aboslute path, "join" would have also worked
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*',(req,res)=>{
    res.status(404).send('the resource you\'re looking for does not exist')
})

app.listen(5012,()=>{
    console.log('server is listing on 5012')
})