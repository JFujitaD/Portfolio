import {
  Paper,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import experiencesData from './experiencesData.json';
import { useContext } from 'react';
import AppContext from '../../AppContext';
import ReactVisibilitySensor from 'react-visibility-sensor';
import Experience from './experience/Experience';

const Experiences = () => {
  const appContext = useContext(AppContext);
  const theme = useTheme();

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) =>
        appContext.onVisible('experiences-visible', isVisible)
      }
      partialVisibility='top'
    >
      <Paper
        id='Experience'
        elevation={24}
        sx={{
          backgroundColor: theme.palette.background.light,
          padding: '3em',
          margin: '3em',
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant='h3'>Experience and Skills</Typography>
          </Grid>
          <Grid item xs={6}>
            {experiencesData.industry.map((e) => {
              return <Experience key={e.name} e={e} />;
            })}
          </Grid>
          <Grid item xs={6}>
            <Accordion>
              <AccordionSummary
                onClick={() => appContext.updateProgress('skills')}
              >
                <Grid container>
                  <Grid item xs={11}>
                    <Typography variant='h5'>Skills</Typography>
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'right' }}>
                    <ConstructionIcon />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <ul style={{ marginTop: 0 }}>
                  {experiencesData.skills.map((t) => {
                    return (
                      <li key={t}>
                        <Typography variant='subtitle1'>{t}</Typography>
                      </li>
                    );
                  })}
                </ul>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Paper>
    </ReactVisibilitySensor>
  );
};

export default Experiences;
