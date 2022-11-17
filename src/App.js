import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Experiences from './components/experience/Experiences';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

const theme = createTheme({
  palette: {
    background: {
      default: '#9b9bbd',
      paper: '#76b196',
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
