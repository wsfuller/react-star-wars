import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import FilmsList from '../components/Films/ListContainer';
import Hero from '../components/Hero';
import HeroImage from '../assets/images/hero-backgrounds/tie-fighers-and-star-destroyer.jpg';
import ReactStarWarsLogo from '../assets/images/logos/react-star-wars.svg';

const useStyles = makeStyles(theme => ({
  hero: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  image: {
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  wrapper: {
    width: '95vw',
    maxWidth: 1400,
    flexGrow: 1,
    position: 'relative',
    margin: '-10vh auto 0',
    zIndex: 10,
    [theme.breakpoints.up('lg')]: {
      width: '100vw',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <main>
      <Hero
        backgroundImage={HeroImage}
        altText="Tie Fighters and a Star Destroyer in space"
        content={(
          <div className={classes.heroContent}>
            <img className={classes.image} src={ReactStarWarsLogo} alt="Logo for React Star Wars" />
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              type="button"
              href="https://swapi.co/"
            >
              Powered by SWAPI
            </Button>
          </div>
)}
        className={classes.hero}
      />
      <FilmsList
        numberOfFilms={4}
        filmsOrderBy={`${randomNumber % 2 === 0 ? 'episodeId_ASC' : 'episodeId_DESC'}`}
        gridOptions={{
          xs: 12,
          sm: 6,
          md: 3,
          lg: 3,
        }}
      />
    </main>
  );
};

export default Home;
