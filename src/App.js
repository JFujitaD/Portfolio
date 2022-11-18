import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Experiences from './components/experience/Experiences';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Experiences />
        <Projects />
      </ThemeProvider>
    </div>
  );
}

export default App;
