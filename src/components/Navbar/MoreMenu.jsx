import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const MoreMenu = ({ openDialog }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => setAnchorEl(null);

  return (
    <Fragment>
      <IconButton
        color="inherit"
        aria-controls="more-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="more-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose(openDialog('about'))}>About</MenuItem>
        <MenuItem onClick={() => handleClose(openDialog('tools'))}>Tools</MenuItem>
        <MenuItem
          button
          component="a"
          onClick={handleClose}
          href="https://github.com/wsfuller/react-star-wars"
        >
          GitHub
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

MoreMenu.propTypes = {
  openDialog: PropTypes.func.isRequired,
};

export default MoreMenu;
