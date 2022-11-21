import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext } from 'react';
import AppContext from '../../../AppContext';

const Project = ({ p }) => {    
    const appContext = useContext(AppContext);
    const theme = useTheme();

    return (
        <Grid key={p.name} item xs={3}>
            <Card sx={{ height: '300px', marginBottom: '0', overflow: 'auto' }}>
            <CardMedia 
                component='img'
                image={p.image}
                alt={p.name}
                height='100px'
            />
                <CardContent>
                    <Typography variant='h5'>{p.name}</Typography>
                    <Accordion sx={{ backgroundColor: theme.palette.background.paper2, marginTop: 2 }}>
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
                    color='secondary'
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