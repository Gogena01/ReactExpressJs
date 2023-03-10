import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err)
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    console.log(this.state.apiResponse)
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <div style={{backgroundColor:'white'}} >
            {JSON.parse(this.state.apiResponse)}
        </div>
      </div>
    )
  }
}



export default App;
