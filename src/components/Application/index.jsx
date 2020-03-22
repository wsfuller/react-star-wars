import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../Navbar';
import Routes from '../../views/Routes';
import Footer from '../Footer';

const useStyles = makeStyles(() => ({
  contentWrapper: {
    display: 'flex',
    minHeight: '95vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const App = () => {
  const classes = useStyles();

  async function supportsWebp() {
    // eslint-disable-next-line no-restricted-globals
    if (!self.createImageBitmap) {
      console.log('noper nope nope');
      return false;
    }

    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
  }

  (async () => {
    if (await supportsWebp()) {
      console.log('does support');
    } else {
      console.log('does not support');
    }
  })();

  return (
    <Fragment>
      <Navbar />
      <div className={classes.contentWrapper}>
        <Routes />
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
