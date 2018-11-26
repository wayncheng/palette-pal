import React from 'react';
import Swatch from './Swatch';
import './Palette.scss';

const abc = 'abcdefghijklmnopqrstuvwxyz1234567890';

const Palette = (props) => {
	return (
		<div className="palette">
			{props.colors.map((color, index) => {
				let id = abc[index];
				return <Swatch color={color} id={id} key={id} />;
			})}
		</div>
	);
};
export default Palette;

Palette.defaultProps = {
	colors: []
};
