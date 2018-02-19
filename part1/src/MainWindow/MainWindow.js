import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import Login from '../components/Login';

export default class MainWindow extends Component {

    constructor(props) {
      super(props);
      this.state = {
        socket:null,
        user:null
      };
    }

    componentWillMount() {
      this.initSocket()
    }

    render () {
      return(
        <Login socket={socket} setUser={this.setUser} />
        /*<div class="main-container">
            <div class="toppane">Test Page</div>
            <div class="leftpane">
              <h1>Test Page</h1>
            </div>
            <div class="middlepane">Test Page</div>
            <div class="rightpane">
              <h1>Test Page</h1>
            </div>
        </div>*/
      )
    }
};

MainWindow.contextTypes = {
  socket: PropTypes.object.isRequired
};
