import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import { withStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import ErrorIcon from '@material-ui/icons/Close';

const Error = props => {
  // const { classes, error } = props;
  const { error } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          // className={classes.errorContent}
        >
          {/* <ErrorIcon className={classes.errorIcon} /> */}
          <Typography variant="display1" gutterBottom>
            There was an error
          </Typography>
          <Typography variant="caption" gutterBottom>
            {error.message}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

Error.propTypes = {
  classes: PropTypes.shape({}),
  error: PropTypes.shape({
    message: PropTypes.string
  })
};

Error.defaultProps = {
  classes: {},
  error: {
    message: 'We are currently trying to resolve the issue'
  }
};

// const styles = theme => ({
//   errorContent: {
//     color: theme.palette.error.main,
//   },
//   errorIcon: {
//     marginBottom: theme.spacing.unit,
//     fontSize: theme.typography.display2.fontSize,
//     border: `2px solid ${theme.palette.error.main}`,
//     borderRadius: theme.shape.borderRadius,
//   },
// });

// export default withTheme()(withStyles(styles)(Error));
export default Error;
