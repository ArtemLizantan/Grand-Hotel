import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 556,
      sm: 768,
      md: 991,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    // action: {
    //   active: '',
    //   disabled: '',
    //   disabledBackground: '',
    //   hover: '',
    //   selected: '',
    // },
    background: {
      default: 'lightgray',
      paper: '#002c4b',
    },
    // divider: '',
    primary: {
      main: '#fd7b03',
      light: '#ffd012',
      dark: '',
    },
    secondary: {
      main: '#9f9f9f',
      light: '#fff',
      dark: '',
    },
    // error: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // warning: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // info: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // success: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    text: {
      primary: '#000',
      secondary: '#fff',
      disabled: '',
    },
  },
  // spacing: 0,
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       background: '',
    //     },
    //   },
    // },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          background: '#FD7B03',
          color: 'white',
          width: '100%',
          fontSize: '24px',
          fontWeight: '700',
          textTransform: 'uppercase',
          '&:hover': {
            background: '#ffcc00',
          },
          '@media (max-width: 768px)': {
            fontSize: '20px',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: 'inherit',
          },
        },
        address: { fontStyle: 'normal' },
        img: {
          height: 'auto',
          display: 'block',
        },
        ul: { margin: 0, padding: 0, listStyle: 'none' },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
