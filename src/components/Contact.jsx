import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { withStyles } from '@material-ui/core/styles'
import ContactDetails from './ContactDetails';

const styles = theme => ({
    root: {
        height: '90vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingBottom: theme.spacing(20),
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
            marginLeft: theme.spacing(4)
        },
    }
});
class Contact extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <ContactForm />
                <ContactDetails />
            </div>
        );
    }
}

export default withStyles(styles)(Contact);