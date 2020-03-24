import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/images/logos/wsf-logo.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: `${theme.spacing(4)}px auto 0`,
    padding: `${theme.spacing(8)}px ${theme.spacing(2)}px`,
    background: theme.palette.grey[900],
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  content: {
    width: '100%',
    maxWidth: 1400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    margin: `0 auto ${theme.spacing(2)}px`,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      marginBottom: 0
    }
  },
  wsfBranding: {
    width: 'auto',
    height: 28,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    order: 1,
    zIndex: 1,
    color: '#ffffff',
    fontFamily: theme.typography.secondaryFontFamily,
    fontSize: 12,
    textDecoration: 'none'
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 5
  },
  copyright: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      top: '45%',
      left: 0,
      right: 0
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <a
          href="https://wsfuller.dev"
          className={classes.wsfBranding}
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          rel="noopener"
        >
          <img
            src={logo}
            className={classes.logo}
            alt="William S Fuller Logo, blue background white foreground showing symbol for metal music"
          />
          <span>Built by William S Fuller</span>
        </a>
      </div>

      <Typography variant="caption" className={classes.copyright}>
        &copy;
        {`${new Date().getFullYear()} All Rights Reserved`}
      </Typography>
    </footer>
  );
};

export default Footer;
