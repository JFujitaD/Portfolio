import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import AppContext from "../../../AppContext";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CodeIcon from '@mui/icons-material/Code';

const Experience = ({ e }) => {
    const appContext = useContext(AppContext);
    const theme = useTheme();
    const iconMapping = [
        <CodeIcon />,
        <IntegrationInstructionsIcon />,
    ];

    return (
        <Accordion>
            <AccordionSummary onClick={() => appContext.updateProgress(e.title)}>
                <Grid container>
                    <Grid item xs={11}>
                        <Typography variant='h5'>{e.title}</Typography>
                    </Grid>
                    <Grid item xs={1} sx={{ textAlign: 'right' }}>
                        {iconMapping[e.id]} 
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Accordion sx={{ backgroundColor: theme.palette.background.paper2 }}>
                    <AccordionSummary onClick={() => appContext.updateProgress(e.name)}>
                        <Typography variant='subtitle1'>{e.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='subtitle2'>{e.description}</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginTop: '1em', backgroundColor: theme.palette.background.paper2 }}>
                    <AccordionSummary onClick={() => appContext.updateProgress(`${e.title}-skills`)}>
                        <Typography variant='subtitle1'>Skills</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul style={{ marginTop: 0 }}>
                            {e.tasks.map((s) => {
                                return (
                                        <li key={s}>
                                            <Typography variant='subtitle2'>{s}</Typography>
                                        </li>
                                );
                            })}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
    );
};

export default Experience;