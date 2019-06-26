import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import filmImages from './filmImages';

const filmId = url => url.split('/')[5];

const imgSrc = (title) => {
  const newTitle = title
    .toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');

  return filmImages[newTitle];
};

const FilmsList = withRouter(({ history, films }) => (
  <Grid container style={{ flexGrow: 1 }} spacing={1}>
    {films.map(film => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={film.title}>
        <Card>
          <CardActionArea
            onClick={() => {
              history.push(`/films/${filmId(film.url)}`);
            }}
          >
            <CardMedia
              component="img"
              alt={`${film.title} movie poster`}
              height="420"
              image={imgSrc(film.title)}
              title={film.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {film.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
));

FilmsList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FilmsList;
