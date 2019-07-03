import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';

// import characterImages from './characterImages';

const useStyles = makeStyles(theme => ({
  characterLink: {
    color: '#ffffff',
    textAlign: 'center',
    textDecoration: 'none',
  },
  characterAvatar: {
    margin: `0 auto ${theme.spacing(2)}px`,
  },
}));

const CharactersList = ({ characters, grid }) => {
  const classes = useStyles();
  // const imgSrc = (name) => {
  //   const newName = name
  //     .toLowerCase()
  //     .split(' ')
  //     .map(s => s.charAt(0).toUpperCase() + s.substring(1))
  //     .join('');

  //   return characterImages[newName];
  // };

  return (
    <Grid container spacing={4}>
      {characters.map(character => (
        <Grid item xs={grid.xs} sm={grid.sm} md={grid.md} lg={grid.lg} key={character.id}>
          <Link className={classes.characterLink} to={`characters/${character.id}`}>
            <Avatar className={classes.characterAvatar}>
              <FaceIcon />
            </Avatar>
            <Typography variant="caption" display="block" gutterBottom>
              {character.name}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  grid: PropTypes.shape({}),
};

CharactersList.defaultProps = {
  grid: {
    xs: 4,
    sm: 2,
    md: 1,
    lg: 1,
  },
};

export default CharactersList;
