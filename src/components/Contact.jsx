import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { withStyles } from '@material-ui/core/styles'
import ContactDetails from './ContactDetails';

const styles = theme => ({
    root: {
        height: '86vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        padding: theme.spacing(2, 0, 10),
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