import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// import filmImages from './filmImages';

// const filmId = url => url.split('/')[5];

// const imgSrc = (title) => {
//   const newTitle = title
//     .toLowerCase()
//     .split(' ')
//     .map(s => s.charAt(0).toUpperCase() + s.substring(1))
//     .join('');

//   return filmImages[newTitle];
// };

const Profile = ({ film, poster }) => (
  <Grid container style={{ flexGrow: 1 }} spacing={1}>
    <Grid item xs={12} sm={4}>
      <img src={poster} alt={`${film.title} poster`} />
    </Grid>
    <Grid item xs={12} sm={8}>
      <Typography variant="h2" gutterBottom>
        {film.title}
      </Typography>
      <List component="ul">
        <ListItem component="li">
          <ListItemText primary={`Director: ${film.director}`} />
        </ListItem>
        <ListItem component="li">
          <ListItemText primary={`Producer: ${film.producers[0]}`} />
        </ListItem>
        <ListItem component="li">
          <ListItemText primary={`Released: ${film.releaseDate}`} />
        </ListItem>
      </List>
      <Divider />
      <Typography variant="body1" gutterBottom>
        {film.openingCrawl}
      </Typography>
      <Divider />
    </Grid>
  </Grid>
);

Profile.propTypes = {
  film: PropTypes.shape({}).isRequired,
  poster: PropTypes.string.isRequired,
};

export default Profile;
