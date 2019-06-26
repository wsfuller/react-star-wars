import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = (props) => {
  const { size } = props;

  return (
    <Grid container alignItems="center" direction="row" justify="center">
      <CircularProgress size={size} />
    </Grid>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
};

Loader.defaultProps = {
  size: 50,
};

export default Loader;
