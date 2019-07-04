import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Section from '../components/Section';
import FilmsList from '../components/Films/ListContainer';
import Hero from '../components/Hero';
import HeroImage from '../assets/images/hero-backgrounds/tie-fighers-and-star-destroyer.jpg';
import ReactStarWarsLogo from '../assets/images/logos/react-star-wars.svg';
import ReactStarWars from '../assets/images/icons/comps/react-star-wars.svg';
import ModernTools from '../assets/images/icons/comps/react-apollo-graphql.svg';
import GraphqlSwapi from '../assets/images/icons/comps/graphql-swapi.svg';

const useStyles = makeStyles(theme => ({
  heroContent: {
    height: '100%',
  },
  image: {
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  cardsMedia: {
    height: 145,
  },
  cardsIcon: {
    maxWidth: 20,
    marginRight: theme.spacing(0.5),
  },
}));

const Home = () => {
  const classes = useStyles();
  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <Fragment>
      <Helmet>
        <title>React Star Wars</title>
      </Helmet>
      <main>
        <Hero
          backgroundImage={HeroImage}
          altText="Tie Fighters and a Star Destroyer in space"
          content={(
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              className={classes.heroContent}
            >
              <img
                className={classes.image}
                src={ReactStarWarsLogo}
                alt="Logo for React Star Wars"
              />
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                type="button"
                href="https://graphiql.graphcms.com/simple/v1/swapi"
              >
                Powered by SWAPI GraphQL
              </Button>
            </Grid>
)}
          className={classes.hero}
        />
        <Section>
          <Container>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                  About
                </Typography>
              </Grid>
              {/* GRAPHQL SWAPI CARD */}
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    className={classes.cardsMedia}
                    image={GraphqlSwapi}
                    title="GraphQL Star Wars API"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      GraphQL SWAPI
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      This project uses the GraphQL port of the Star Wars API by GraphCMS
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://swapi.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SWAPI
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href="https://graphiql.graphcms.com/simple/v1/swapi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GraphCMS GraphiQL
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              {/* REACT + APOLLO + GRAPHQL CARD */}
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    className={classes.cardsMedia}
                    image={ModernTools}
                    title="React + Apollo + GraphQL"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Modern Tooling
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      React Star Wars is a modern web application built with React and GraphQL
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://reactjs.org/">
                      React
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href="https://www.apollographql.com/docs/react/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apollo Client
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href="https://graphql.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GraphQL
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              {/* REACT STAR WARS CARD */}
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    className={classes.cardsMedia}
                    image={ReactStarWars}
                    title="React Star Wars"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Codebase
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Interested in checking out the React Star Wars codebase? Click the GitHub link
                      below
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href="https://github.com/wsfuller/react-star-wars"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Section>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                  Films
                </Typography>
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </Container>
        </Section>
      </main>
    </Fragment>
  );
};

export default Home;
