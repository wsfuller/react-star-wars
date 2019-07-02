import React, { Fragment } from 'react';

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
    <Fragment>
      <Navbar />
      <div className={classes.applicationWrapper}>
        <Routes />
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
