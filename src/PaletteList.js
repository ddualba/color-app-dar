import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		return (
			<div>
				<MiniPalette />
				<h1>React Colors</h1>
				{palettes.map((p) => (
					<p>
						<Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
					</p>
				))}
			</div>
		);
	}
}

export default PaletteList;
