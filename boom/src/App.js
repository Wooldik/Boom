import React, { Component } from 'react';
import classes from './App.module.css';

export default class App extends Component {
	render() {
		return (<div>
			<h1 className='text'>Начинай игру!</h1>
			<button className='btn1' >Кнопка 1</button>
			<button className='btn2'>Кнопка 2</button>
			<button className='btn3'>Кнопка 3</button>
		</div>
		);
	}
}



