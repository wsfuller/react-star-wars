import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ParallaxBanner } from 'react-scroll-parallax';

const useStyles = makeStyles(theme => ({
  heroParallaxBanner: {
    height: '50vh !important',
    [theme.breakpoints.up('md')]: {
      height: '70vh !important',
    },
  },
  hero: {
    width: '100vw',
    height: '50vh',
    position: 'relative',
    top: '-25px',
    left: 0,
    right: 0,
    display: 'block',
    zIndex: 1,
  },
  heroOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    background: 'rgba(0,0,0, 0.5)',
  },
}));

const Hero = ({ backgroundImage, content }) => {
  const classes = useStyles();

  return (
    <ParallaxBanner
      className={classes.heroParallaxBanner}
      layers={[
        {
          image: backgroundImage,
          amount: 0.1,
          slowerScrollRate: false,
        },
      ]}
    >
      <div className={classes.heroOverlay}>{content}</div>
    </ParallaxBanner>
  );
};

Hero.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default Hero;
