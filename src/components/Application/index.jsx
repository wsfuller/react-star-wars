import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../Navbar';
import Routes from '../../views/Routes';
import Footer from '../Footer';

const useStyles = makeStyles(() => ({
  applicationWrapper: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.applicationWrapper}>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
