const io = require('./index.js').io

const  {VERIFY_USER, USER_CONNECTED, LOGOUT} = require('../Events')

const {createUser, createMessage, creatChat} = require('../settings')

const connectedUser = {}

module.exports = function(socket) {
    console.log("Socket Id:" + socket.id);


    //Verify username
    socket.on(VERIFY_USER, (nickname, callback) =>{
        if (isUser(connectedUser, nickname)) {
            callback({isUser:true, user:null})
        }
        else {
          callback({ isUser:false, user:createUser({nickname:nickname})})
        }
    })

    //user connects with username
    socket.on(USER_CONNECTED, (user) => {
      connectedUsers = addUser(connectedUsers, user)
      socket.user = user
      console.log(connectedUsers);
    })

}
