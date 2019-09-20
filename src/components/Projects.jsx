import React from 'react'
import { makeStyles, Grid, Paper, Typography, Button } from '@material-ui/core'
import { MyProjects } from '../MyProjects';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        paddingBottom: theme.spacing(5),
    },
    paper: {
        maxWidth: 650,
        background: 'none',
        padding: theme.spacing(2),
        margin: theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(3),
        }
    },
    image: {
        width: 160,
        height: 160,
    },
    img: {
        width: 250,
        height: 140,
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}))

const Projects = () => {
    const classes = useStyles();
    // console.log(MyProjects);
    return (
        <div className={classes.root}>
            {MyProjects.map(project => <Paper key={project.id} className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <img className={classes.img} alt="complex" src={project.picture} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h5">
                                    {project.title}
                                </Typography>
                                <br />
                                <Typography variant="body2" gutterBottom>
                                    {project.technology}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {project.date}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Button color="primary" size="small" variant="outlined" href={project.demo}>view Demo</Button>
                                <Button color="secondary" size="small" variant="outlined" href={project.link} style={{ marginLeft: 20 }}>view Code</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            )}
        </div>
    )
}

export default Projects
