import { Grid, Paper, Typography, useTheme } from "@mui/material";
import Project from "./project/Project";
import projectsData from './projectsData.json';

const Projects = () => {
    const theme = useTheme();

    return (
        <Paper
            id='Projects'
            elevation={24}
            sx={{ 
                backgroundColor: theme.palette.background.light,
                padding: '3em', 
                margin: '3em',
            }}
        >
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h3">Projects</Typography>
                </Grid>
                {projectsData.map((p) => {
                    return (
                        <Project p={p}/>
                    );
                })}
            </Grid>
        </Paper>
    );
};

export default Projects;