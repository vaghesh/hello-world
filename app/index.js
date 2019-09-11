// Adding libraries
const express = require('express')
var path = require('path')

// Defining Port number to start the web server
const app = express()
const PORT = 8000
const HOST = '0.0.0.0'

// Open the Get request to listen to Web Server
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

// Start Web Server
app.listen(PORT, HOST)
console.log(`The Web server running on http://${HOST}:${PORT}`)
