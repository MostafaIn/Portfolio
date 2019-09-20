import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

import myBG from './Images/mina.jpg'
import myBG2 from './Images/myBG2.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${myBG}) center/cover fixed no-repeat`,
        [theme.breakpoints.down('sm')]: {
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${myBG2}) center/cover fixed no-repeat`,
        },
    }
}))

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Router>
                <CssBaseline />
                <NavBar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
