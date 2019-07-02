import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    ...theme.link,
    transition: 'all .5s ease-in-out',
    '&:hover': {
      color: theme.link.hoverColor,
    },
  },
}));

const Link = ({
  href, target, text, external,
}) => {
  const classes = useStyles();

  // TODO: Need to add logic here for Internal Links using React Router and external links using standard anchor tag

  return (
    <a href={href} className={classes.link} target={target}>
      {text}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.string,
  external: PropTypes.bool,
};

Link.defaultProps = {
  target: '_self',
  external: false,
};

export default Link;
