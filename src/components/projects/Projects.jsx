import { Grid, Paper, Typography } from "@mui/material";
import Project from "./project/Project";
import projectsData from './projectsData.json';

const Projects = () => {
    return (
        <div className='Body'>
            <Paper
                elevation={24}
                sx={{ 
                    backgroundColor: 'primary',
                    padding: '3em', 
                    margin: '3em',
                }}
            >
                <Grid container spacing={2}>
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
        </div>
    );
};

export default Projects;