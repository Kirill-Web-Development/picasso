import { withProviders } from './providers';
import {Routing} from 'pages';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Routing/>
    </ThemeProvider>
  );
}

export default withProviders(App);
