import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const Loader = (props) => {
  const classes = useStyles();
  const { size } = props;

  return (
    <Grid
      container
      alignItems="center"
      direction="row"
      justify="center"
      className={classes.progress}
    >
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
