import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
  },
}));

const Image = ({ customClass, src, alt }) => {
  const classes = useStyles();

  return <img className={`${classes.image}  ${customClass}`} src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

Image.defaultProps = {
  customClass: '',
};

export default Image;
