import React from 'react';

class ChatWindow extends React.Component {

  /*constructor(props) {
    super(props);
    this.state = {
      msg:='',
      message: = []
    };
  }
  sendMessage() {
    const {socket} = this.context;
    socket.emit('msg', this.state.msg);
    this.setState({msg: = ''});
  }*/
  render() {
    return (
      <div className='chat-window'>
        <div className='input-box'>
          <input type='text' className='input input-big' />
          <button type='button' className='btn-pull-right' onClick={() => this.sendMessage()}>Send</button>
        </div>
      </div>
    );
  }
};

/*ChatWindow.contextTypes = {
  socket: propTypes.object.isRequired
};*/

export default ChatWindow;
