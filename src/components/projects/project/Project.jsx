import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Project = ({ p }) => {
    return (
        <Grid key={p.name} item xs={3}>
            <Card sx={{ backgroundColor: 'lightgray', height: '250px' }}>
                <CardContent>
                    <Typography variant='h5'>{p.name}</Typography>
                </CardContent>
            <CardMedia 
                component='img'
                image={p.image}
                alt={p.name}
                height='100px'
            />
            <CardActions>
                <Button size='small' href={p.link}>Learn More</Button>
            </CardActions>
            </Card>
        </Grid>
    );
};

export default Project;