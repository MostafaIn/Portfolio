import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { withStyles } from '@material-ui/core/styles';
import ContactDetails from './ContactDetails';

const styles = (theme) => ({
	root: {
		height: '100vh',
		minWidth: '100%',
		position: 'relative',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		paddingBottom: theme.spacing(10),
		paddingTop: theme.spacing(15),
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'flex-start',
			paddingTop: theme.spacing(10),
			paddingLeft: theme.spacing(4),
		},
	},
});
class Contact extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root} id="contact">
				<ContactForm />
				<ContactDetails />
			</div>
		);
	}
}

export default withStyles(styles)(Contact);
