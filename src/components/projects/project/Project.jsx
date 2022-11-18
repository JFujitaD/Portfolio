import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Project = ({ p }) => {    
    return (
        <Grid key={p.name} item xs={3}>
            <Card sx={{ height: '225px', marginBottom: '0' }}>
            <CardMedia 
                component='img'
                image={p.image}
                alt={p.name}
                height='100px'
            />
                <CardContent>
                    <Typography variant='h5'>{p.name}</Typography>
                </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant='contained' size='small' href={p.link}>Learn More</Button>
            </CardActions>
            </Card>
        </Grid>
    );
};

export default Project;