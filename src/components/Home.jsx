import React from 'react';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../index.css';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '90vh',
		minWidth: '100%',
		position: 'relative',
		paddingTop: theme.spacing(5),
	},
	paper: {
		minWidth: '45%',
		background: 'none',
		padding: theme.spacing(3, 2),
		marginTop: theme.spacing(20),
		marginLeft: theme.spacing(10),
		[theme.breakpoints.down('sm')]: {
			minWidth: '60%',
			padding: 0,
			marginLeft: theme.spacing(4),
		},
	},
	button: {
		margin: theme.spacing(2, 0),
		fontFamily: 'copperplate',
		fontSize: 'calc(0.4vw + 5px)',
	},
}));

const Home = () => {
	const classes = useStyles();
	const myFade = useSpring({
		from: { opacity: -1 },
		opacity: 1,
		config: { delay: 2000, duration: 22000 },
	});
	return (
		<div className={classes.root} id="home">
			<Paper className={classes.paper} elevation={0}>
				<div className="title">
					<Typography component="p">Hi,my name is Mostafa,</Typography>
					<Typography component="p">I'm a web developer,</Typography>
					<Typography component="p">focus on JavaScript and React with material UI.</Typography>
				</div>
				<animated.div style={myFade}>
					<Button variant="contained" color="secondary" href="#contact" className={classes.button}>
						Are you looking for me <ArrowForwardIosIcon />
					</Button>
				</animated.div>
			</Paper>
		</div>
	);
};

export default Home;
