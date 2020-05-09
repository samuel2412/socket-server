const express = require('express')
const app = express()
const socketio = require('socket.io')

app.use(express.static(__dirname + '/public'))

const server = app.listen(8081)
 
const io = socketio(server)

io.on('connection',(socket)=>{
  socket.emit('messageFromServer',{data: 'Welcome to the socketio server'})
  socket.on('messageToServer',(dataFromClient)=>{
    console.log(dataFromClient)
  })
})