import { Paper, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, useTheme } from "@mui/material";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';
import experiencesData from './experiencesData.json';
import './Experiences.css';
import { useContext } from "react";
import AppContext from "../../AppContext";
import ReactVisibilitySensor from "react-visibility-sensor";

const Experiences = () => {
    const appContext = useContext(AppContext);
    const iconMapping = [
        <CodeIcon />,
        <IntegrationInstructionsIcon />,
    ];
    const theme = useTheme();

    return (
        <ReactVisibilitySensor
            onChange={(isVisible) => appContext.onVisible('experiences-visible', isVisible)}
            partialVisibility='bottom'
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
                        <Typography variant='h3'>Experience</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {experiencesData.industry.map((e) => {
                            return (
                                <Accordion key={e.name}>
                                    <AccordionSummary onClick={() => appContext.updateProgress(e.title)}>
                                        <Grid container>
                                            <Grid item xs={11}>
                                                <Typography variant='h5'>{e.title}</Typography>
                                            </Grid>
                                            <Grid item xs={1} sx={{ textAlign: 'right' }}>
                                                {iconMapping[e.id]} 
                                            </Grid>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Accordion>
                                            <AccordionSummary onClick={() => appContext.updateProgress(e.name)}>
                                                <Typography variant='subtitle1'>{e.name}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography variant='subtitle2'>{e.description}</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={{ marginTop: '1em' }}>
                                            <AccordionSummary onClick={() => appContext.updateProgress(`${e.title}-skills`)}>
                                                <Typography variant='subtitle1'>Skills</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <ul className="List">
                                                    {e.tasks.map((s) => {
                                                        return (
                                                                <li key={s}>
                                                                    <Typography variant='subtitle2'>{s}</Typography>
                                                                </li>
                                                        );
                                                    })}
                                                </ul>
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </Grid>
                    <Grid item xs={6}>
                        <Accordion>
                            <AccordionSummary onClick={() => appContext.updateProgress('technologies')}>
                            <Grid container>
                                <Grid item xs={11}>
                                    <Typography variant='h5'>Technologies</Typography>
                                </Grid>
                                <Grid item xs={1} sx={{ textAlign: 'right' }}>
                                    <ConstructionIcon /> 
                                </Grid>
                            </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className="List">
                                    {experiencesData.technologies.map((t) => {
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