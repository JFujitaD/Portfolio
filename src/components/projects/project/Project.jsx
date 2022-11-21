import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext } from 'react';
import AppContext from '../../../AppContext';

const Project = ({ p }) => {    
    const appContext = useContext(AppContext);

    return (
        <Grid key={p.name} item xs={3}>
            <Card sx={{ height: '275px', marginBottom: '0', overflow: 'auto' }}>
            <CardMedia 
                component='img'
                image={p.image}
                alt={p.name}
                height='100px'
            />
                <CardContent>
                    <Typography variant='h5'>{p.name}</Typography>
                    <Accordion>
                        <AccordionSummary onClick={() => appContext.updateProgress(p.name)}>
                            <Typography variant='subtitle1'>Details</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='subtitle2'>{p.details}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button 
                    variant='contained'
                    size='small'
                    href={p.link}
                    endIcon={<GitHubIcon />}
                >
                    Go to Project
                </Button>
            </CardActions>
            </Card>
        </Grid>
    );
};

export default Project;