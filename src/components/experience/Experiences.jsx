import { Paper, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import experiencesData from './experiencesData.json';

const Experiences = () => {
    return (
        <div className='Experiences'>
            <Paper
                elevation={24}
                sx={{ 
                    backgroundColor: 'primary',
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
                                <Accordion key={e.name} sx={{ backgroundColor: 'lightgray' }}>
                                    <AccordionSummary>
                                        <Typography variant='h5'>{e.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Accordion sx={{ backgroundColor: 'lightgray' }}>
                                            <AccordionSummary>
                                                <Typography variant='subtitle1'>{e.name}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography variant='subtitle2'>{e.description}</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={{ backgroundColor: 'lightgray', marginTop: '1em' }}>
                                            <AccordionSummary>
                                                <Typography variant='subtitle1'>Skills</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {e.skills.map((s) => {
                                                    return (
                                                        <Typography key={s} variant='subtitle2'>{s}</Typography>
                                                    );
                                                })

                                                }
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </Grid>
                    <Grid item xs={6}>
                        <Accordion sx={{ backgroundColor: 'lightgray' }}>
                            <AccordionSummary>
                                <Typography variant='h5'>Technologies</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {experiencesData.technologies.map((t) => {
                                    return (
                                        <Typography key={t} variant='subtitle1'>{t}</Typography>
                                    );
                                })}
                            </AccordionDetails>
                        </Accordion> 
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Experiences;