import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Experiences from './components/experiences/Experiences';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

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
