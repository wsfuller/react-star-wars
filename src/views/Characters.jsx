import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Hero from '../components/Hero';
import HeroImage from '../assets/images/hero-backgrounds/skywalker-yoda-vader.png';
import Section from '../components/Section';
import CharactersList from '../components/Characters/ListContainer';

const useStyles = makeStyles(() => ({
  heroContent: {
    height: '100%',
    opacity: '.75'
  }
}));

const Characters = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Helmet>
        <title>React Star Wars | Characters</title>
      </Helmet>
      <Hero
        backgroundImage={HeroImage}
        altText="Luke Skywalker, Yoda, and Darth Vader facing off opposing forcers"
        content={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Grid container alignItems="center" justify="center" className={classes.heroContent}>
            <Typography variant="h1" component="h1" gutterBottom>
              Characters
            </Typography>
          </Grid>
        }
        className={classes.hero}
      />
      <Section>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2" gutterBottom>
                Characters
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CharactersList
                orderBy="name_ASC"
                gridOptions={{
                  xs: 6,
                  sm: 4,
                  md: 3,
                  lg: 2
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Characters;
