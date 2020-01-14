import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
	constructor () {
    super();
    this.state = {
      user : []
    }
  }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/JustinTrombley96')
      .then(res => {
        console.log(res.data)
        this.setState({user: res.data})
      })
  }

  componentWillUnmount(){

  } 

  componentDidUpdate() {

  }

	render () {
		return (
			<div className='App'>
				<h1>Github User Card: {this.state.user.login}</h1>
			</div>
		);
	}
}
export default App;
