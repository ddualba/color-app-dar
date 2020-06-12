import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	main: {
		backgroundColor: 'purple',
		boder: '3px solid teal'
	}
};
function MiniPalette(props) {
	const { classes } = props;
	console.log(classes);
	return (
		<div className={classes.main}>
			<h1>Mini Palette</h1>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
