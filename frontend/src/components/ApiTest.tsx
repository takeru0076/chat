import React, { Component } from 'react';

interface State {
  message: string;
}

class ApiTest extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: ''
    };
  }

  test = (): void => {
    fetch('http://localhost:3000/api/test')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ message: data.message });
      });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>ApiTest</h1>
        <button onClick={this.test}>ApiTest</button>
        <p>{message}</p>
      </div>
    );
  }
}

export default ApiTest;
