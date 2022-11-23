import { alpha, Grid, Paper, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import AppContext from '../../AppContext';

const Hobbies = () => {
  const appContext = useContext(AppContext);
  const theme = useTheme();

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) =>
        appContext.onVisible('hobbies-visible', isVisible)
      }
      partialVisibility='top'
    >
      <Paper
        id='Experience'
        elevation={24}
        sx={{
          backgroundColor: alpha(theme.palette.background.light, 0.9),
          padding: '3em',
          margin: '5em',
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant='h3'>Hobbies</Typography>
          </Grid>
        </Grid>
      </Paper>
    </ReactVisibilitySensor>
  );
};

export default Hobbies;
