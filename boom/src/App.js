import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			winBtn: null,
			btn: 'btn',
			onBoom: 'Ты выйграл!',
			btn1: 1,
			btn2: 1,
			btn3: 1,
			onBoom1: 'green',
			onBoom2: 'green',
			onBoom3: 'green',
		}

	}


	randomBoomb = () => {
		const btnAll = document.getElementsByClassName('btn');
		let arrBtnAll = Array.from(btnAll);
		let randomButton = Math.floor(Math.random() * 3);


		this.setState({
			winBtn: arrBtnAll[randomButton],
			btn1: arrBtnAll[randomButton] === arrBtnAll[0] ? 1 : 0,
			btn2: arrBtnAll[randomButton] === arrBtnAll[1] ? 1 : 0,
			btn3: arrBtnAll[randomButton] === arrBtnAll[2] ? 1 : 0,
			onBoom1: this.state.btn1 === 'green' ? 'Ты выйграл!' : 'Ты взорвался!',
			onBoom2: this.state.btn2 === 'green' ? 'Ты выйграл!' : 'Ты взорвался!',


		})


	}


	render() {

		return (<div>
			<h1 className='text'>{this.state.onBoom}</h1>
			<button className={(this.state.btn1 ? 'green' : 'red') + ' ' + this.state.btn} onClick={this.randomBoomb}>Кнопка 1</button>
			<button className={(this.state.btn2 ? 'green' : 'red') + ' ' + this.state.btn} onClick={this.randomBoomb}>Кнопка 2</button>
			<button className={(this.state.btn3 ? 'green' : 'red') + ' ' + this.state.btn} onClick={this.randomBoomb}>Кнопка 3</button>
		</div>
		);
	}
}



