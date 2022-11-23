import {
  CssBaseline,
  IconButton,
  Snackbar,
  ThemeProvider,
} from '@mui/material';
import theme from './theme';
import Experiences from './components/experiences/Experiences';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import AppShell from './components/app-shell/AppShell';
import AppContext from './AppContext';
import { useState } from 'react';
import Hobbies from './components/hobbies/Hobbies';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [progress, setProgress] = useState(0); // Starting value for progress bar
  const [activityMap, setActivityMap] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const activityTotal = 19; // Total number of interactions the page can have

  const updateProgress = (id) => {
    if (!(id in activityMap)) {
      setProgress(progress + 1);
      setActivityMap({
        ...activityMap,
        [id]: true,
      });
    }
    if (progress == activityTotal - 1) {
      setSnackbarOpen(true);
    }
  };

  const onVisible = (id, isVisible) => {
    updateProgress(id);
  };

  const snackbarAction = (
    <IconButton onClick={() => setSnackbarOpen(false)}>
      <CloseIcon fontSize='small' />
    </IconButton>
  );

  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          activityTotal,
          progress,
          updateProgress,
          onVisible,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppShell />
          <Header />
          <Experiences />
          <Hobbies />
          <Projects />
          <Snackbar
            message='Thank you for viewing my portfolio!'
            open={snackbarOpen}
            action={snackbarAction}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          />
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
