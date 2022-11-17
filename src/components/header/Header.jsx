import './Header.css'
import { Grid, Paper, Typography } from "@mui/material";

const jobTitle = 'Software Engineer';
const description = 'Logical, organized, fast-paced programmer with expertise in Java, Python, JavaScript, and C#. Skilled in several areas of programming such as object-oriented programming, databases, containerization technologies, event-driven programming, graphical user interfaces, and more. Experienced in systems engineering and weapon system acquisition through the use of the Scaled Agile Framework.';

const Header = () => {
    return (
        <div className='Header'>
            <Paper 
                elevation={24}
                sx={{ 
                    backgroundColor: 'primary',
                    padding: '3em', 
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Typography variant='h3'>Julian Dean</Typography>
                        <Typography variant='subtitle1'>{jobTitle}</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <img src='profile.png' />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body'>{description}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Header;