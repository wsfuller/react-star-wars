import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import filmImages from './filmImages';

const useStyles = makeStyles(() => ({
  cardLink: {
    textDecoration: 'none',
  },
}));

const FilmsList = ({ films, grid }) => {
  const classes = useStyles();
  const imgSrc = (title) => {
    const newTitle = title
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join('');

    return filmImages[newTitle];
  };

  return (
    <Grid container style={{ flexGrow: 1 }} spacing={1}>
      {films.map(film => (
        <Grid item xs={grid.xs} sm={grid.sm} md={grid.md} lg={grid.lg} key={film.title}>
          <Card>
            <Link className={classes.cardLink} to={`/films/${film.id}`}>
              <CardActionArea disableRipple>
                <CardMedia
                  component="img"
                  alt={`${film.title} movie poster`}
                  height="420"
                  image={imgSrc(film.title)}
                  title={film.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2" style={{ color: '#fff' }}>
                    {film.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  grid: PropTypes.shape({}),
};

FilmsList.defaultProps = {
  grid: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  },
};

export default FilmsList;
