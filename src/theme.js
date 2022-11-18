import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#303030',
        paper: '#424242',
        light: '#3a3a3f',
      },
      text: {
        primary: '#ffffff',
      },
    },
  });

export default theme;