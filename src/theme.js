import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#cb30a2',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: 'transparent',
          paper: 'transparent',
        },
      },
      typography: {
        fontFamily: '"Maven Pro", "Helvetica", "Arial", sans-serif' ,
        h2: {
            fontFamily: 'Maven Pro',
          },
        allVariants: {
            color: "pink"
          },
      },
})

export default theme;