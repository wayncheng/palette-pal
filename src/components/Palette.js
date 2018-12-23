import React from 'react';
import Swatch from './Swatch';
import './Palette.scss';

const abc = 'abcdefghijklmnopqrstuvwxyz1234567890';
const flashDuration = 900;
class Palette extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keymap: {
				// a: '#000',
			},
			onDeck: false,
			flashFiring: false,
			color: ''
		};
	}

	componentDidMount = () => {
		// Listen to key presses for letter's that are assigned to swatches.
		// If key is assigned, we do the whole copy thing.
		window.addEventListener('keyup', (event) => {
			event.preventDefault();
			let keyID = event.key;

			let keyColor = this.state.keymap[keyID];

			if (keyColor) {
				this.executeCopy(keyColor);
				console.log(keyID, keyColor);

				this.setState({ color: keyColor });
			}
		});

		// map keys in state
		let keymap = {};
		for (let i = 0; i < this.props.colors.length; i++) {
			const keyColor = this.props.colors[i];
			const keyID = abc[i];
			keymap[keyID] = keyColor;
		}
		this.setState({
			keymap
		});
	};

	// Listen for click events on palette because of event delegation
	// Only interested in the swatches that have the data attributes, so
	// we check if the event target has the class 'swatch-target' and if
	// it does, then we go through the copying process. If not, do nothing.
	handleClick = (event) => {
		event.preventDefault();
		const $t = event.target;

		if ($t.classList.contains('swatch-target')) {
			const colorData = $t.getAttribute('data-color');
			console.log('colorData:', colorData);

			this.executeCopy(colorData);
			this.setState({ color: colorData });
		}
	};

	executeCopy = (colorData) => {
		const $clipboard = document.getElementById('clipboard');

		// write to clipboard
		$clipboard.value = colorData;

		// select clipboard's contents
		$clipboard.select();

		// copy selection
		document.execCommand('copy');

		// clear selection on the page
		document.getSelection().removeAllRanges();

		// alert(`Copied: ${colorData}`);
		this.flashAlert();
	};

	flashAlert = () => {
		const $flash = document.getElementById('flash');

		// if (this.state.flashFiring === false){

			// fire the flash
			$flash.classList.add('firing');
			this.setState({ flashFiring: true })
			
			setTimeout(() => {
				this.setState({ flashFiring: false })
				$flash.classList.remove('firing');
			}, flashDuration);

		// }
	};

	render() {
		return (
			<div className="palette" onClick={this.handleClick}>
				{this.props.colors.map((color, index) => {
					let id = abc[index];
					return <Swatch color={color} id={id} key={id} />;
				})}

				{/* {this.state.flashFiring && ( */}
				<span
					id="flash"
					className="flash"
					style={{
						background: this.state.color,
						animationDuration: flashDuration + 'ms',
					}}
				>
					<h2>{this.state.color}</h2>
				</span>
				{/* )} */}
			</div>
		);
	}
}
export default Palette;

Palette.defaultProps = {
	colors: []
};
