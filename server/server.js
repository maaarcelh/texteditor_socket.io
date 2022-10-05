const io = require('socket.io')(4000, {
    cors: {
        origin: ["http://localhost:3000"]
    }
})
console.log(io)

io.on('connection', socket => {
    socket.on("changed-data", (text) => {
        socket.broadcast.emit("recieve-message" , text)
    })
})


