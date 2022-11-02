 const express = require('express')
 const app = express()

 app.get('/', (req,res)=>{
    res.send("Hell World!");
 });

 app.listen(4000, ()=>{
    console.log("Listen to 4000");
 });

 app.post('/', (req, res) => {
   res.send('POST request')
 })

 app.put('/', (req, res) => {
   res.send('PUT request')
 })