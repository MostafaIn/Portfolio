import React,{useState, useEffect} from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import myBG from './Images/mina.jpg';
import myBG2 from './Images/myBG2.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 0,
		padding: 0,
		height: '100%',
		minWidth: '100%',
		background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${myBG}) center/cover fixed no-repeat`,
		[theme.breakpoints.down('sm')]: {
			background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${myBG2}) center/cover fixed no-repeat`,
		},
	},
}));

const App = () => {
	const classes = useStyles();
	const [page, setPage] = useState(null)
	useEffect(() => {
		window.addEventListener('scroll',() => setPage(window.scrollY))
	}, [])

	return (
		<div className={classes.root}>
			<CssBaseline />
			<NavBar page={page} />
			<Home />
			<Projects />
			<About />
			<Contact />
		</div>
	);
};

export default App;
