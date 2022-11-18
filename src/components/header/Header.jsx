import './Header.css';
import { Divider, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const jobTitle = 'Full Stack Developer';
const company = '309th Software Engineering Group';
const description = 'Logical, organized, fast-paced programmer with expertise in Java, Python, JavaScript, and C#. Skilled in several areas of programming such as object-oriented programming, databases, containerization technologies, event-driven programming, graphical user interfaces, and more. Experienced in systems engineering and weapon system acquisition through the use of the Scaled Agile Framework.';

const Header = () => {
    const theme = useTheme();

    return (
        <Paper 
            elevation={24}
            sx={{ 
                backgroundColor: theme.palette.background.light,
                padding: '3em 6em', 
                marginTop: '3em',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant='h3'>Julian Dean</Typography>
                    <Typography variant='h5'>{jobTitle}</Typography>
                    <Typography variant='subtitle1'>{company}</Typography>
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
                    <img className='Profile' src='profile.png' alt='Profile'/>
                </Grid>
                <Grid item xs={12}>
                    <Divider style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5'>About</Typography>
                    <Typography variant='body'>{description}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Header;