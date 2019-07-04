import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Section from '../Section';
import Image from '../Image';
import filmImages from './filmImages';
import CharactersList from '../Characters/List';
import DropdownList from '../DropdownList';

const useStyles = makeStyles(theme => ({
  image: {
    margin: `0 auto ${theme.spacing(4)}px`,
    borderRadius: theme.borderRadius.default,
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px',
  },
  filmTitle: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  filmCrawl: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const imgSrc = (title) => {
  const newTitle = title
    .toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');

  return filmImages[newTitle];
};

const releaseDate = (date) => {
  const startSlice = date.indexOf('T');
  const slicedDate = date.slice(0, startSlice);

  return slicedDate;
};

const Profile = ({ film }) => {
  const classes = useStyles();

  return (
    <main>
      <Section>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Image
                customClass={classes.image}
                src={imgSrc(film.title)}
                alt={`${film.title} poster`}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography className={classes.filmTitle} variant="h2" gutterBottom>
                {film.title}
              </Typography>
              <Divider />
              <Typography className={classes.filmCrawl} variant="body1" gutterBottom>
                {film.openingCrawl}
              </Typography>
              <Divider />
              <List component="ul">
                <ListItem component="li">
                  <ListItemText primary={`Director: ${film.director}`} />
                </ListItem>
                <ListItem component="li">
                  <ListItemText primary={`Producer: ${film.producers[0]}`} />
                </ListItem>
                <ListItem component="li">
                  <ListItemText primary={`Released: ${releaseDate(film.releaseDate)}`} />
                </ListItem>
              </List>
              <Grid container>
                <Grid item xs={6} sm={3}>
                  <DropdownList title="Planets" items={film.planets} displayKey="name" />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <DropdownList title="Species" items={film.species} displayKey="name" />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <DropdownList title="Starships" items={film.starships} displayKey="name" />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <DropdownList title="Vehicles" items={film.vehicles} displayKey="name" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h2" gutterBottom>
                Characters
              </Typography>
            </Grid>
          </Grid>
          <CharactersList characters={film.characters} />
        </Container>
      </Section>
    </main>
  );
};

Profile.propTypes = {
  film: PropTypes.shape({}).isRequired,
};

export default Profile;
