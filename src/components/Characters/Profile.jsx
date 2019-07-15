import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SpeciesIcon from '@material-ui/icons/Android';
import BirthYearIcon from '@material-ui/icons/Today';
import GenderIcon from '@material-ui/icons/Wc';
import HeightIcon from '@material-ui/icons/AccessibilityNew';
import WeightIcon from '@material-ui/icons/FitnessCenter';
import EyeColorIcon from '@material-ui/icons/RemoveRedEye';
import WorldIcon from '@material-ui/icons/Public';

import Section from '../Section';
import Image from '../Image';
import FilmsList from '../Films/List';
import characterImages from './characterImages';

const useStyles = makeStyles(theme => ({
  profileImage: {
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

const Profile = ({ character }) => {
  const classes = useStyles();
  const characterImage = (name) => {
    const newName = name
      .toLowerCase()
      .replace('-', ' ')
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join('');

    if (characterImages[newName]) {
      return <Image customClass={classes.profileImage} src={characterImages[newName]} alt={name} />;
    }
    return (
      <Image
        customClass={classes.profileImage}
        src={characterImages.notFound}
        alt={`${name} Character Image Not Found`}
      />
    );
  };

  return (
    <main>
      <Section>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              {characterImage(character.name)}
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Typography className={classes.filmTitle} variant="h2" gutterBottom>
                {character.name}
              </Typography>
              <List component="ul">
                <ListItem component="li">
                  <ListItemIcon>
                    <SpeciesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={character.species.length >= 1 ? character.species[0].name : 'Unknown'}
                  />
                </ListItem>
                <ListItem component="li">
                  <ListItemIcon>
                    <BirthYearIcon />
                  </ListItemIcon>
                  <ListItemText primary={character.birthYear ? character.birthYear : 'Unknown'} />
                </ListItem>
                <ListItem component="li">
                  <ListItemIcon>
                    <GenderIcon />
                  </ListItemIcon>
                  <ListItemText primary={character.gender ? character.gender : 'Unknown'} />
                </ListItem>
                <ListItem component="li">
                  <ListItemIcon>
                    <HeightIcon />
                  </ListItemIcon>
                  <ListItemText primary={character.height ? character.height : 'Unknown'} />
                </ListItem>
                <ListItem component="li">
                  <ListItemIcon>
                    <WeightIcon />
                  </ListItemIcon>
                  <ListItemText primary={character.mass ? character.mass : 'Unknown'} />
                </ListItem>
                <ListItem component="li">
                  <ListItemIcon>
                    <EyeColorIcon />
                  </ListItemIcon>
                  <ListItemText primary={character.eyeColor[0]} />
                </ListItem>
                <ListItem component="li">
                  <ListItemIcon>
                    <WorldIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={character.homeworld ? character.homeworld.name : 'Unknown'}
                  />
                </ListItem>
              </List>
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
          </Grid>
          <FilmsList
            films={character.films}
            gridOptions={{
              xs: 12,
              sm: 6,
              md: 3,
              lg: 3,
            }}
          />
        </Container>
      </Section>
    </main>
  );
};

Profile.propTypes = {
  character: PropTypes.shape({}).isRequired,
};

export default Profile;
