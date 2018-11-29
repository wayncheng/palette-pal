import React, { Component } from 'react';
import './App.scss';
import Palette from './components/Palette';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				{/* <Palette colors={[ '#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999', '#aaaaaa', '#bbbbbb', '#cccccc', '#dddddd', '#eeeeee', '#ffffff', ]} /> */}
				<Palette
					colors={[
						'#E63217',
						'#FA4A2F',
						'#FFB0B0',
						'#FA7319',
						'#FF8B3D',
						'#FFC88A',
						'#FFD70D',
						'#FAEF23',
						'#FFFAA3',
						'#08CC56',
						'#35DB77',
						'#87FAB5',
						'#0877C2',
						'#3599DB',
						'#84C8F5',
						'#8537A3',
						'#9B59B6',
						'#E9B0FF',
						'#5C6370',
						'#6D7585',
						'#BAC4D4',
						'#474D57',
						'#5C6370',
						'#929EB3'
					]}
				/>

				<textarea id="clipboard" name="clipboard" className="fully-hidden" />
			</div>
		);
	}
}

export default App;
