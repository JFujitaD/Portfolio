import { AppBar, Box, LinearProgress, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import DataObjectIcon from '@mui/icons-material/DataObject';
import { useContext } from "react";
import AppContext from "../../AppContext";

const AppShell = () => {
    const appContext = useContext(AppContext);
    const progress = appContext.progress;
    const activityTotal = appContext.activityTotal;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar>
                <Toolbar>
                    <DataObjectIcon fontSize="large" edge='start' sx={{ marginRight: 2 }}/>
                    <Typography variant='h5'>
                        Julian Dean
                    </Typography>
                    <Box sx={{ flexGrow: 1, marginLeft: 10, marginRight: 2 }}>
                        <LinearProgress color='secondary' variant='determinate' value={100 * appContext.progress / appContext.activityTotal} />
                    </Box>
                    <Box sx={{ marginRight: 10 }}>
                        <Typography variant='body'>
                            {`${(100 * progress / activityTotal).toFixed(2)}%`}
                        </Typography>
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton href='#'>
                                <ListItemText>BACK TO TOP</ListItemText>
                            </ListItemButton>
                            <ListItemButton href='#Experience'>
                                <ListItemText>EXPERIENCE</ListItemText>
                            </ListItemButton>
                            <ListItemButton href='#Projects'>
                                <ListItemText>PROJECTS</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default AppShell;