import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Grid, CssBaseline } from '@material-ui/core'
import HtmlIcon from '../Icons/HtmlIcon'
import CssIcon from '../Icons/CssIcon'
import JavascriptIcon from '../Icons/JavascriptIcon'
import MaterialuiIcon from '../Icons/MaterialuiIcon'
import NodejsIcon from '../Icons/NodejsIcon'
import FirebaseIcon from '../Icons/FirebaseIcon'
import ReactjsIcon from '../Icons/ReactjsIcon';
import GraphqlIcon from '../Icons/GraphqlIcon';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    bio: {
        boxSizing: 'border-box',
        background: 'transparent',
        padding: theme.spacing(2, 5),
        width: '65%',
        margin: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(5, 2),
            paddingLeft: theme.spacing(2)
        },
        flex: 1
    },
    txt: {
        fontFamily: 'Handlee',
        fontSize: 'calc(0.5vw + 10px)',
        fontWeight: 'bolder',
        color: '#fff',
        textAlign: 'justify',
    },
    title: {
        fontFamily: 'Kefa',
        fontSize: 'calc(1vw + 16px)',
        paddingBottom: theme.spacing(2),
    },
    progress: {
        color: '#64dd17'
    },
    skill: {
        textAlign: 'center',
        color: '#ffb503',
        paddingBottom: theme.spacing(10),
    },
}))


const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Paper elevation={0} className={classes.bio}>
                <Typography className={classes.title}>
                    About Me :
        </Typography>
                <Typography className={classes.txt}>
                    I'm obsessed with making things and even more obsessed with making things better.
                    I've been in the business of creating since I was a schoolboy and worked in my father's workshop.
                    I have more than 3 years' experience as a sales officer in an electrical company and
                    I have learned how to deal with customers correctly. After graduating from  Kardan university,
                    I've been actively following web technologies.
          <br />
                    my specialty is front-end web design and development,
                    my updated skills are javascript with new features,
                    a good understanding of reactJS and some more ...
        </Typography>
            </Paper>
            <Paper elevation={0} className={classes.bio}>
                <Typography className={classes.title}>
                    WHAT I CAN DO :
        </Typography>
                <Grid container>
                    <Grid item xs={4} sm={3} className={classes.skill}>
                        <HtmlIcon />
                        <Typography>HTML 5</Typography>
                        <Progress percent={95} type="circle" width={70} symbolClassName={classes.progress} />
                    </Grid>
                    <Grid item xs={4} sm={3} className={classes.skill}>
                        <CssIcon />
                        <Typography>CSS 3</Typography>
                        <Progress percent={90} type="circle" width={70} symbolClassName={classes.progress} />
                    </Grid>
                    <Grid item xs={4} sm={3} className={classes.skill}>
                        <JavascriptIcon />
                        <Typography>ES6</Typography>
                        <Progress percent={75} type="circle" width={70} symbolClassName={classes.progress} />
                    </Grid>
                    <Grid item xs={4} sm={3} className={classes.skill}>
                        <ReactjsIcon />
                        <Typography>React JS</Typography>
                        <Progress percent={60} type="circle" width={70} symbolClassName={classes.progress} />
                    </Grid>
                    <Grid item xs={4} sm={3} className={classes.skill}>
                        <MaterialuiIcon />
                        <Typography>Material UI</Typography>
                        <Progress percent={70} type="circle" width={70} symbolClassName={classes.progress} />
                    </Grid>
                    <Grid item xs={4} sm={3} className={classes.skill}>
                        <NodejsIcon />
                        <Typography>Node JS</Typography>
                        <Progress percent={40} type="circle" width={70} symbolClassName={classes.progress} />
                    </Grid>
                    <Grid item xs={4} sm={3} className={classes.skill}>
                        <FirebaseIcon />
                        <Typography>Firebase</Typography>
                        <Progress percent={15} type="circle" width={70} symbolClassName={classes.progress} />
                    </Grid>
                    <Grid item xs={4} sm={3} className={classes.skill}>
                        <GraphqlIcon />
                        <Typography>Graph QL</Typography>
                        <Progress percent={10} type="circle" width={70} symbolClassName={classes.progress} />
                    </Grid>
                </Grid>
            </Paper>

        </div>
    )
}

export default About
