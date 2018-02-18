/* Server code */

const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
//Default constants
const PORT = 3000;

io.on('connection',(connectingSocket) => {

    console.log(`User Connected (${connectingSocket})`);

    connectingSocket.on('msg', (msg) => {
      console.log(msg);
      io.emit('msg', msg);
    });

    connectingSocket.on('disconnect', () => {
      console.log(`User disconnected (${connectingSocket})`)
    });
});

http.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
