import React, { Component } from 'react';

/**
 * Calculate brightness value by RGB or HEX color.
 * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
 * @returns (Number) The brightness value (dark) 0 ... 255 (light)
 */
function brightnessByColor(color) {
	// let color = '' + color;
	let isHEX = color.indexOf('#') === 0;
	// let isRGB = color.indexOf('rgb') === 0;
	let r, g, b;

	if (isHEX) {
		let m = color.substr(1).match(color.length === 7 ? /(\S{2})/g : /(\S{1})/g);
		if (m) {
			r = parseInt(m[0], 16);
			g = parseInt(m[1], 16);
			b = parseInt(m[2], 16);
		}
	}
	// if (isRGB) {
	// 	let m = color.match(/(\d+){3}/g);
	// 	if (m) {

	// 		let r = m[0],
	// 		g = m[1],
	// 		b = m[2];
	// 	}
	// }
	if (typeof r != 'undefined') return (r * 299 + g * 587 + b * 114) / 1000;
}

class Swatch extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = (event) => {
		event.preventDefault();
		const $t = event.target;
		const $clipboard = document.getElementById('clipboard');
		
		const colorData = $t.getAttribute('data-color');
		console.log('colorData:',colorData);

		$clipboard.value = colorData;
		$clipboard.select();
		document.execCommand('copy');
		
		
		// const $data = document.querySelector(`#${$t.id} .data`);
		// $data.select(); // select data textarea
		
		

		// copy selection
		document.execCommand('copy');
		// clear selection on the page
		document.getSelection().removeAllRanges();
		
		// const selection = window.getSelection();
		// const range = document.createRange();
		// range.selectNodeContents($data);
		// selection.removeAllRanges();
		// selection.addRange(range);

		// try {
		// 	document.execCommand('copy');
		// 	selection.removeAllRanges();

		// 	// const original = $data.textContent;
		// 	// $data.textContent = 'Copied!';
		// 	// $data.classList.add('success');

		// 	// setTimeout(() => {
		// 	// 	$data.textContent = original;
		// 	// 	$data.classList.remove('success');
		// 	// }, 1200);
		// } catch (e) {
		// 	const errorMsg = document.querySelector('.error-msg');
		// 	errorMsg.classList.add('show');

		// 	setTimeout(() => {
		// 		errorMsg.classList.remove('show');
		// 	}, 1200);
		// }
	};

	render() {
		let classification = 'dark';
		let brightness = brightnessByColor(this.props.color);
		if (brightness > 200) {
			classification = 'light';
		}
		return (
			<div className="swatch">
				<div
					id={'swatch__' + this.props.id}
					className={`content ${classification}`}
					assignment={this.props.id}
					data-color={this.props.color}
					style={{
						backgroundColor: this.props.color
					}}
					onClick={this.handleClick}
				>
					<span className="swatch-id">{this.props.id}</span>
					<span className="data" name={this.props.id}>
						{this.props.color.substr(1)}
					</span>
					{/* <textarea name={this.props.id} className="data" value={this.props.color.substr(1)} cols="7" rows="1"></textarea> */}
				</div>
			</div>
		);
	}
}
export default Swatch;
