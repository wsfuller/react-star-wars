import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import characterImages from './characterImages';
import Image from '../Image';

const useStyles = makeStyles(theme => ({
  characterLink: {
    color: '#ffffff',
    textAlign: 'center',
    textDecoration: 'none',
  },
  characterAvatar: {
    width: '100%',
    margin: `0 auto ${theme.spacing(2)}px`,
  },
  characterThumb: {
    margin: `0 auto ${theme.spacing(2)}px`,
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px',
  },
}));

const CharactersList = ({ characters, grid }) => {
  const classes = useStyles();
  const characterThumbnail = (name) => {
    const newName = name
      .toLowerCase()
      .replace('-', ' ')
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join('');

    if (characterImages.thumbnails[newName]) {
      return (
        <Image
          customClass={classes.characterThumb}
          src={characterImages.thumbnails[newName]}
          alt={name}
        />
      );
    }
    return (
      <Image
        customClass={classes.characterThumb}
        src={characterImages.thumbnails.notFound}
        alt="Character Not Found"
      />
    );
  };

  return (
    <Grid container spacing={4}>
      {characters.map(character => (
        <Grid item xs={grid.xs} sm={grid.sm} md={grid.md} lg={grid.lg} key={character.id}>
          <Link className={classes.characterLink} to={`characters/${character.id}`}>
            {characterThumbnail(character.name)}

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
