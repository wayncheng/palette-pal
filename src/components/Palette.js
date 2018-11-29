import React from 'react';
import Swatch from './Swatch';
import './Palette.scss';

const abc = 'abcdefghijklmnopqrstuvwxyz1234567890';

class Palette extends React.Component {
	constructor(props){
		super(props);
		this.state={
			keymap: {
				// a: '#000',
			},
			onDeck: false,
		}
	}


	componentDidMount = () => {

		window.addEventListener('keyup', (event) => {
			event.preventDefault();
			let keyID = event.key;
			
			let keyColor = this.state.keymap[keyID];

			if(keyColor){
				this.executeCopy(keyColor)
				console.log(keyID,keyColor);
			}

		})

		// map keys in state
		let keymap = {};
		for (let i = 0; i < this.props.colors.length; i++) {
			const keyColor = this.props.colors[i];
			const keyID = abc[i];
			keymap[keyID] = keyColor
		}
		this.setState({
			keymap
		})


	}

	handleClick = (event) => {
		event.preventDefault();
		const $t = event.target;		
		const colorData = $t.getAttribute('data-color');
		console.log('colorData:',colorData);

		this.executeCopy(colorData)
	};

	executeCopy = colorInfo => {
		const $clipboard = document.getElementById('clipboard');
		
		// write to clipboard
		$clipboard.value = colorInfo;

		// select clipboard's contents
		$clipboard.select();
		
		// copy selection
		document.execCommand('copy');
		
		// clear selection on the page
		document.getSelection().removeAllRanges();
	}


	render(){

		return (
			<div className="palette">
			{this.props.colors.map((color, index) => {
				let id = abc[index];
				return <Swatch color={color} id={id} key={id} />;
			})}
		</div>
	);
}
};
export default Palette;

Palette.defaultProps = {
	colors: []
};
