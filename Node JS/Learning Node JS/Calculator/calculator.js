const express = require('express')
const bodyParser = require('body-parser')

// create the function that represent the express module
const app = express()

// To use the bodyParser now we need to call it by using "app.use()"
/* body-parser has few modes for e.g:- bodyParser.text()
                                        bodyParser.json()
                                        bodyParser.urlencoded()*/
// By setting "extended" option to true it just allows us to post nested objects.
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  // It is sends the relative file path
  //   res.sendFile('index.html')
  // __dirname will give us the current file path of the current file
  //   By joining __dirname + the html file that you want to respond with the condition is completed
  res.sendFile(__dirname + '/index.html')
})

// Adding the post method that handle any POST request that comes to our "../[route]" route
app.post('/', function (req, res) {
  //   res.send('Thanks for posting that.')
  //   To tap into the input from the form or any thing we need to have another "npm package called body-parser"
  //   By using bodyParser we are able to pass the http request that we get
  //   By using urlencoded we can get access to form data. And we can get access to the form data as if they were the properties of the object body
  //   For  example:- console.log(req.body.num1) in this case will output the num1 value passed
  //   To the thing that get passed through the body parser is text
  //   So if we want it to be number then we need to explicitly turn this into the number
  let num1 = Number(req.body.num1)
  let num2 = Number(req.body.num2)

  let result = num1 + num2

  res.send(`The result of the calculation is <h3>${result}</h3>`)
})

// Listen to the port
app.listen(3000, function () {
  console.log('Server Listening at the port 3000.')
})
