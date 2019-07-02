import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = '#1e8bca';
const hoverColor = '#23aeff';

const theme = createMuiTheme({
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
    MuiCardActionArea: {
      focusHighlight: {
        'background-color': hoverColor,
      },
    },
  },
});

export default theme;
