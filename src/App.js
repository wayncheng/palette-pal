import React, { Component } from 'react';
import './App.scss';
import Palette from './components/Palette';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Palette colors={[ 
					'#000000', 
					'#111111',
					'#222222',
					'#333333', 
					'#444444', 
					'#555555', 
					'#666666', 
					'#777777', 
					'#888888', 
					'#999999', 
					'#aaaaaa', 
					'#bbbbbb', 
					'#cccccc', 
					'#dddddd', 
					'#eeeeee', 
					'#ffffff', 
				]} />

				<textarea id="clipboard" name="clipboard" className="fully-hidden"></textarea>
			</div>
		);
	}
}

export default App;
