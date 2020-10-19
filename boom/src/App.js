import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			onBoom: 'red',
			btn1: 0,
			btn2: 0,
			btn3: 0,
		}

	}
	randomBoomb = () => {
		const btnAll = document.getElementsByClassName('btn');
		console.log(btnAll);
		this.setState({
			onBoom: this.state.onBoom === 'red' ? 'green' : 'red',
		})
	}

	render() {

		return (<div>
			<h1 className='text'>{this.state.onBoom === 'red' ? 'Ты взорвался!' : 'Ты выйграл!'}</h1>
			<button className='btn' onClick={this.randomBoomb}>Кнопка 1</button>
			<button className='btn' onClick={this.randomBoomb}>Кнопка 2</button>
			<button className='btn' onClick={this.randomBoomb}>Кнопка 3</button>
		</div>
		);
	}
}



