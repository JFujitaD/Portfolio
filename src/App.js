import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Experiences from './components/experiences/Experiences';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import AppShell from './components/app-shell/AppShell';
import AppContext from './AppContext';
import { useState } from 'react';

function App() {
  const [ progress, setProgress ] = useState(1); 
  const activityTotal = 10; // Total number of interactions the page can have
  const updateProgress = () => {
    setProgress(progress + 1);
  };

  return (
    <div className="App">
      <AppContext.Provider value={{
        activityTotal,
        progress,
        updateProgress,
      }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppShell />
          <Header />
          <Experiences />
          <Projects />
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
