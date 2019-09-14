import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});
const pxToRem = value => `${value / 16}rem`;

const primaryColor = '#1e8bca';
const hoverColor = '#23aeff';

const appTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: primaryColor,
    },
    error: {
      main: '#dd6973',
    },
  },
  typography: {
    secondaryFontFamily: '"Open Sans", sans-serif',
  },
  grid: {
    container: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  link: {
    color: primaryColor,
    hoverColor,
    marginLeft: 5,
    marginRight: 5,
    textDecoration: 'none',
  },
  paper: {
    backgroundColor: '#ffffff',
  },
  section: {
    marginBottom: 40,
  },
  borderRadius: {
    default: 8,
    minimal: 4,
    rounded: '50%',
  },

  overrides: {
    MuiTypography: {
      h1: {
        fontSize: pxToRem(48),
        [breakpoints.up('sm')]: {
          fontSize: pxToRem(60),
        },
        [breakpoints.up('md')]: {
          fontSize: pxToRem(72),
        },
        [breakpoints.up('lg')]: {
          fontSize: pxToRem(80),
        },
      },
      h2: {
        fontSize: pxToRem(42),
        [breakpoints.up('sm')]: {
          fontSize: pxToRem(48),
        },
        [breakpoints.up('md')]: {
          fontSize: pxToRem(56),
        },
        [breakpoints.up('lg')]: {
          fontSize: pxToRem(64),
        },
      },
    },
    MuiCardActionArea: {
      focusHighlight: {
        'background-color': hoverColor,
      },
    },
  },
};

export const theme = createMuiTheme(appTheme);

export const responsiveImage = {
  width: '100%',
  height: 'auto',
  display: 'block',
};
