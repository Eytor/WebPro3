import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
import ChatWindow from './ChatWindow/ChatWindow';
import socketClient from 'socket.io-client';

class App extends React.Component {
    componentDidCatch(error, info) {
        console.log(error, info)
    }
    getChildContext() {
        socket: socketClient('http://localhost:3000')
    };


    constructor(props) {
        super(props);
    }



    render() {
        return (
            <ChatWindow />
        );
    };
};

ReactDOM.render(<App />, document.getElementById('app'));
