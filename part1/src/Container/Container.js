import React from 'react';

class Container extends React.Component {
  render() {
    return (
      <div className="container">{this.prop.children}</div>
    );
  };
};

export default Container;
