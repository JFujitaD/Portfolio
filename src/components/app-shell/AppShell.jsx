import { AppBar, Box, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import DataObjectIcon from '@mui/icons-material/DataObject';
import { useContext } from "react";
import AppContext from "../../AppContext";

const AppShell = () => {
    const appContext = useContext(AppContext);

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