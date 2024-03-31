import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export const withRouter = (Component: React.ComponentType) => (...props : any) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...props}/>
        </ThemeProvider>
    )
}