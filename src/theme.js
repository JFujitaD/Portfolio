import { createTheme } from '@mui/material';

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
      paper: '#3f51b5',
      paper2: '#3814ca',
      light: '#3a3a3f',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default theme;
