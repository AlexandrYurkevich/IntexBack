 const express = require('express')
 const app = express()

 app.get('/', (req,res)=>{
    res.send("Hell World!");
 });

 app.listen(4000, ()=>{
    console.log("Listen to 4000");
 });

 app.post('/', (req, res) => {
   res.send('POST request to the homepage')
 })

 app.all('/secret', (req, res, next) => {
   console.log('Accessing the secret section ...')
   next() // pass control to the next handler
 })

 app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })