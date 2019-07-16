import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
    zIndex: 1,
    padding: theme.spacing(1),
  },
  listItem: {
    marginBottom: theme.spacing(1),
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

const DropdownList = ({ title, items, displayKey }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={handleClick}
          >
            {title}
            <ArrowDownIcon className={classes.rightIcon} />
          </Button>
          {open ? (
            <Paper className={classes.paper}>
              {items.map(item => (
                <div key={item.id} className={classes.listItem}>
                  {item[displayKey]}
                </div>
              ))}
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

DropdownList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  displayKey: PropTypes.string.isRequired,
};

export default DropdownList;
