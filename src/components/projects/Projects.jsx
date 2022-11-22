import { alpha, Grid, Paper, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import AppContext from '../../AppContext';
import Project from './project/Project';
import projectsData from './projectsData.json';

const Projects = () => {
  const appContext = useContext(AppContext);
  const theme = useTheme();

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) =>
        appContext.onVisible('projects-visible', isVisible)
      }
      partialVisibility='top'
    >
      <Paper
        id='Projects'
        elevation={24}
        sx={{
          backgroundColor: alpha(theme.palette.background.light, 0.9),
          padding: '3em',
          margin: '5em',
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant='h3'>Projects</Typography>
          </Grid>
          {projectsData.map((p) => {
            return <Project key={p.name} p={p} />;
          })}
        </Grid>
      </Paper>
    </ReactVisibilitySensor>
  );
};

export default Projects;
