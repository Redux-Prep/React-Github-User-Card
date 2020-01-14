import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Card from './components/Card'

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

  // componentWillUnmount(){

  // } 

  // componentDidUpdate() {

  // }

	render () {
		return (
			<div className='App'>
				<Card user={this.state.user}/>
			</div>
		);
	}
}
export default App;
