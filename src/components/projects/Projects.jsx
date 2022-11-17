import { Grid, Paper, Typography } from "@mui/material";
import Project from "./project/Project";

const Body = () => {
    return (
        <div className='Body'>
            <Paper
                elevation={24}
                sx={{ 
                    backgroundColor: 'primary',
                    padding: '3em', 
                    margin: '3em',
                }}
            >
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <Typography variant="h3">Projects</Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Project />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Body;