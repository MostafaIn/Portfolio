import React from 'react'
import Typing from 'react-typing-animation'
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '90vh',
    },
    paper: {
        maxWidth: '45%',
        background: 'none',
        padding: theme.spacing(3, 2),
        position: 'fixed',
        margin: theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(5, 3),
            maxWidth: '60%',
        },
    },
    button: {
        margin: theme.spacing(2, 0),
        fontFamily: 'copperplate',
        fontSize: 'calc(0.4vw + 5px)'
    }
}))

const Home = () => {
    const classes = useStyles();
    const myFaceFade = useSpring({
        from: { opacity: -1 }, opacity: 1,
        config: { delay: 25000, duration: 25000 }
    })
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
                <Typing speed={60}>
                    <Typing.Delay ms={1500} />
                    <Typography variant="h3" style={{ fontWeight: 'bold', fontSize: 'calc(1.2vw + 12px)' }} >
                        Hi,my name is Mostafa,
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: 'calc(1vw + 9px)' }} >
                        I'm a web developer,
                    </Typography>
                    <br />
                    <Typing.Delay ms={560} />
                    <Typography variant="h5" style={{ fontSize: 'calc(1vw + 9px)' }} >
                        focus on JavaScript and React with material UI.
                    </Typography>
                </Typing>
                <animated.div style={myFaceFade}>
                    <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/contact">
                        Are you looking for me {" "}
                        <ArrowForwardIosIcon />
                    </Button>
                </animated.div>
            </Paper>
        </div>
    )
}

export default Home
