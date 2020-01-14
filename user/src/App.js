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

  }

  componentWillUnmount(){

  } 

  componentDidUpdate() {

  }

	render () {
		return (
			<div className='App'>
				<h1>Github User Card</h1>
			</div>
		);
	}
}
export default App;
