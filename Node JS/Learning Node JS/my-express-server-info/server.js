// Require the express file for the incorporation
const express = require('express')
// create the function that represent the express module
const app = express()
// Now describe what should happen if the browser makes request to our server and makes a get request
// Now describe the callback function that will tell what will happen when the request happen
// app.get('/', function (request, response) {
app.get('/', function (req, res) {
  // To send the response we need to tap into the send method in the response module
  res.send('<h1>Hello, World!</h1>')
})

// You can setup as many route as you wish just call the app.get and provide the route "/..position" and the callback function for it to respond with or make a request with
app.get('/contact', function (req, res) {
  res.send('<h2>You can just knock on the door.</h2>')
})

app.get('/about', function (req, res) {
  res.send(
    '<h3>Just some random loner neighbourhood guy that want to make something out of himself.</h3>'
  )
})

app.get('/hobbies', function (req, res) {
  res.send(
    '<ul><li>Sleeping</li><li>Coding</li><li>Fulfilling the dreams</li></ul>'
  )
})

// Now tell the program to listen on the specific server eg:- 3000
//  To able to identify or see if our server is running or not add the callback function the method listen
// app.listen(3000)
app.listen(3000, function () {
  console.log('Server started on the port 3000')
})
