import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname:"",
      error:""
    };
  }

  handleSubmit = (e)=>{
    e.preventDefault()


  }

  handleChange = ()=>{

  }
    render() {
      const { nickname, error} = this.state
        return (
            <div className="login">
              <form onSubmit={this.handleSubmit} className="login-form">
                <lable for="nickname"><h2>please type in nickname</h2></lable>
                <input
                  ref={(input)=>{this.textInput = input}}
                  type="text"
                  id="nickname"
                  value={nickname}
                  onchange={this.handleChange}
                  placeholder={'Username'}
                />
              </form>
            </div>
            <div className="error">{error ? error:null}</div>
        )
    };
};

export default Login;
