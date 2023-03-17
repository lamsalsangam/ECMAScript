const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req, res) {
  let num1 = Number(req.body.num1)
  let even_num = []
  let odd_num = []
  for (let i = 1; i < num1; i++) {
    if (i % 2 == 0) {
      even_num.push(i)
    } else {
      odd_num.push(i)
    }
  }

  even_nums = ''
  odd_nums = ''
  function functionEven(item, index) {
    // return `${index + 1} : ${item} <br/>`
    even_nums += '<br/>' + item
  }
  function functionOdd(item, index) {
    // return `${index + 1} : ${item} <br/>`
    odd_nums += '<br/>' + item
  }
  //   res.send(`${even_num.forEach(functionEven)}`)
  even_num.forEach(functionEven)
  odd_num.forEach(functionOdd)
  res.send(
    `Even Number are: ${even_nums}.<br><br><br>Odd Number are: ${odd_nums}`
  )
})

app.listen(3000, function () {
  console.log('Server listinening at port 3000')
})
