import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Hero from '../components/Hero';
import HeroImage from '../assets/images/hero-backgrounds/stormtrooper.jpg';
import Section from '../components/Section';
import FilmsList from '../components/Films/ListContainer';

const useStyles = makeStyles(() => ({
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
}));

const Films = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Helmet>
        <title>React Star Wars | Films</title>
      </Helmet>
      <Hero
        backgroundImage={HeroImage}
        altText="Tie Fighters and a Star Destroyer in space"
        content={(
          <div className={classes.heroContent}>
            <Typography variant="h1" component="h1" gutterBottom>
              Films
            </Typography>
          </div>
)}
        className={classes.hero}
      />
      <Section>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2" gutterBottom>
                Films
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FilmsList
                gridOptions={{
                  xs: 12,
                  sm: 6,
                  md: 3,
                  lg: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Films;
