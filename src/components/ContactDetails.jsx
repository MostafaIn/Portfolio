import React from 'react'
import { Grid, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GithubIcon from '../Icons/GithubIcon';
import LinkedinIcon from '../Icons/LinkedInIcon';
import PhoneIcon from '../Icons/PhoneIcon';
import EmailIcon from '../Icons/EmailIcon';



const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            width: '65%',
        },
    },
    avatar: {
        marginTop: 110,
        marginLeft: 20,
        marginBottom: 10,
        width: 140,
        height: 140,
    },
    link: {
        marginTop: 0,
        transform: 'scale(1)',
        transition: '.5s ease-in-out',
        '&:hover': {
            marginTop: -10,
            transform: 'scale(1.3)',
            transition: '.2s ease-in-out',
        }
    }

}))

const ContactDetails = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.link}>
                <Link href="https://github.com/MostafaIn" >
                    <GithubIcon />
                </Link>
            </Grid>
            <Grid item className={classes.link}>
                <Link href="https://linkedin.com/in/mostafahazareh">
                    <LinkedinIcon />
                </Link>
            </Grid>
            <Grid item className={classes.link}>
                <Link href="mailto:mostafa.hazareh@integrify.io?subject=comes_from_my_portfolio">
                    <EmailIcon />
                </Link>
            </Grid>
            <Grid item className={classes.link}>
                <Link href="tel:+358451070737">
                    <PhoneIcon />
                </Link>
            </Grid>
        </Grid>
    )
}

export default ContactDetails
