var express = require('express')
var path = require('path')

var app = express()

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, "./statics/css")));
app.use(express.static(path.join(__dirname, "./statics/js")));

// send all requests to index.html so browserHistory in React Router works
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/1', function (req, res) {
  res.sendFile(path.join(__dirname, '1.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
