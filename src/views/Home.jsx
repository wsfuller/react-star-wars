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
  const aboutCards = [
    {
      image: GraphqlSwapi,
      imageTitle: 'GraphQL Star Wars API',
      contentTitle: 'GraphQL SWAPI',
      contentText: 'This project uses the GraphQL port of the Star Wars API by GraphCMS',
      actions: [
        {
          actionLink: 'https://swapi.co/',
          actionText: 'SWAPI',
        },
        {
          actionLink: 'https://graphiql.graphcms.com/simple/v1/swapi',
          actionText: 'GraphCMS GraphiQL',
        },
      ],
    },
    {
      image: ModernTools,
      imageTitle: 'React + Apollo + GraphQL',
      contentTitle: 'Modern Tooling',
      contentText: 'React Star Wars is a modern web application built with React and GraphQL',
      actions: [
        {
          actionLink: 'https://www.apollographql.com/docs/react/',
          actionText: 'Apollo Client',
        },
        {
          actionLink: 'https://graphql.org/',
          actionText: 'GraphQL',
        },
      ],
    },
    {
      image: ReactStarWars,
      imageTitle: 'React Star Wars',
      contentTitle: 'Codebase',
      contentText:
        'Interested in checking out the React Star Wars codebase? Click the GitHub link below',
      actions: [
        {
          actionLink: 'https://github.com/wsfuller/react-star-wars',
          actionText: 'GitHub Repo',
        },
      ],
    },
  ];

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
              {aboutCards.map(card => (
                <Grid item xs={12} md={4} key={card.contentTitle}>
                  <Card style={{ maxWidth: 400, margin: 'auto' }}>
                    <CardMedia
                      className={classes.cardsMedia}
                      image={card.image}
                      title={card.imageTitle}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.contentTitle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {card.contentText}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {card.actions.map(action => (
                        <Button
                          key={action.actionText}
                          size="small"
                          color="primary"
                          href={action.actionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {action.actionText}
                        </Button>
                      ))}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
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
