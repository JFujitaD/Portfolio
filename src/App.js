import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Header from './components/header/Header';

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
      </ThemeProvider>
    </div>
  );
}

export default App;
