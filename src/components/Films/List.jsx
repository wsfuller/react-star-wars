import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CloudinaryContext, Image } from 'cloudinary-react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { responsiveImage } from '../../theme';

const useStyles = makeStyles(() => ({
  cardLink: {
    textDecoration: 'none',
  },
}));

const FilmsList = ({ films, grid }) => {
  const classes = useStyles();
  const imgSrc = (title) => {
    const cloudinaryTitle = title
      .toLowerCase()
      .split(' ')
      .join('-');

    return cloudinaryTitle;
  };

  return (
    <Grid container style={{ flexGrow: 1 }} spacing={1}>
      {films.map(film => (
        <Grid item xs={grid.xs} sm={grid.sm} md={grid.md} lg={grid.lg} key={film.title}>
          <Card>
            <Link className={classes.cardLink} to={`/films/${film.id}`}>
              <CardActionArea disableRipple>
                <CloudinaryContext cloudName="wsfuller" secure="true" format="png">
                  <Image
                    style={responsiveImage}
                    publicId={`react-star-wars/v1/films/${imgSrc(film.title)}`}
                    alt={`${film.title} movie poster`}
                  />
                </CloudinaryContext>
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
