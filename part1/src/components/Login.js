import React, { Component } from 'react';
import {VERIFY_USER} from '../Events';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname:'',
      error:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setUser({user, isUser}) {
    console.log(user, isUer);
    if (isUser) {
      this.setError('User name taken')
    }
    else {
      this.props.setUser(user)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { socket } = this.props
    const { nickname } = this.state
    socket.emit(VERIFY_USER, nickname, this.setUser)
  }

  handleChange(e) {
      this.setState({nickname:e.target.value})
  }

  render() {
    const { nickname, error} = this.state
      return (
          <div className="login">
            <form onSubmit={ this.handleSubmit } className="login-form">
              <label htmlFor="nickname"><h2>please type in nickname</h2></label>
              <input
                ref={ (input)=> { this.textInput = input } }
                type="text"
                id="nickname"
                value={nickname}
                onChange={this.handleChange}
                placeholder={'Username'}
              />
              <div className="error">{error ? error:null}</div>
            </form>
          </div>
      )
  };
};

//export default Login;
