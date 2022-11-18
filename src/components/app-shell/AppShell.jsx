import { AppBar, Box, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import DataObjectIcon from '@mui/icons-material/DataObject';

const AppShell = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <DataObjectIcon fontSize="large" edge='start' sx={{ marginRight: 2 }}/>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>
                        Julian Dean
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>BACK TO TOP</ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText>EXPERIENCE</ListItemText>
                            </ListItemButton>
                            <ListItemButton>
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