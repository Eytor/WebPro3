import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container/Container';
import {PropTypes} from 'prop-types';
import '../styles/site';
import ChatWindow from './ChatWindow/ChatWindow';
import socketClient from 'socket.io-client';


class App extends React.Component {
    componentDidCatch(error, info) {
        console.log(error, info)
    }
    getChildContext() {
        return {
          socket: socketClient('http://localhost:3000')
        };
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
              <ChatWindow />
            </Container>
        );
    };
};

App.childContextTypes = {
    socket: PropTypes.object.isRequired
};

ReactDOM.render(<App />, document.getElementById('app'));
