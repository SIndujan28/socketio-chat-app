const app=require('express')()
var http=require('http').createServer(app)
var io=require('socket.io')(http)
app.get('/',(req,res) => {
    res.sendFile(__dirname+'/index.html')
})
io.on('connection',(socket) => {
    console.log('A user connected')
    socket.on('disconnect',() => {
        console.log('user disconnected')
    })
})
http.listen(3000,(req,res) => {
    console.log('listening to port 3000')
})