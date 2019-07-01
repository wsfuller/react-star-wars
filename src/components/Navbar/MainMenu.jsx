import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PeopleIcon from '@material-ui/icons/People';
import FilmsIcon from '@material-ui/icons/Theaters';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80vw',
    maxWidth: 320,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('md')]: {
      width: '20vw',
    },
  },
  branding: {
    justifyContent: 'center',
  },
  logo: {
    maxWidth: 135,
  },
}));

const MainMenu = ({ logo }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem className={classes.branding} button component={Link} to="/">
          <img className={classes.logo} src={logo} alt="React Star Wars logo" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/films">
          <ListItemIcon>
            <FilmsIcon />
          </ListItemIcon>
          <ListItemText primary="Films" />
        </ListItem>
        <ListItem button component={Link} to="/people">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
      </List>
    </div>
  );
};

MainMenu.propTypes = {
  classes: PropTypes.shape({}),
  logo: PropTypes.string.isRequired,
};

MainMenu.defaultProps = {
  classes: {},
};

export default MainMenu;
