import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

import ReactStarWarsLogo from '../../assets/images/logos/react-star-wars.svg';
import MainMenu from './MainMenu';
import MoreMenu from './MoreMenu';
import DialogAbout from './DialogAbout';
import DialogTools from './DialogTools';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      dialog: false,
      whichDialog: '',
    };
    this.openDialog = this.openDialog.bind(this);
  }

  toggleDrawer = () => {
    const { drawer } = this.state;

    this.setState({
      drawer: !drawer,
    });
  };

  openDialog = (selectedDialog) => {
    this.setState({
      dialog: true,
      whichDialog: selectedDialog,
    });
  };

  closeDialog = () => {
    this.setState({
      dialog: false,
      whichDialog: '',
    });
  };

  dialogToRender = () => {
    const { whichDialog } = this.state;
    let dialogContent;
    if (whichDialog === 'about') {
      dialogContent = <DialogAbout />;
    } else if (whichDialog === 'tools') {
      dialogContent = <DialogTools />;
    } else {
      dialogContent = <div />;
    }
    return dialogContent;
  };

  render() {
    const { classes } = this.props;
    const { drawer, dialog } = this.state;

    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              role="button"
              onClick={() => this.toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.branding} to="/">
                <img
                  className={classes.imageResponsive}
                  src={ReactStarWarsLogo}
                  alt="Logo for React Star Wars"
                />
              </Link>
            </Typography>
            <MoreMenu openDialog={this.openDialog} />
          </Toolbar>
        </AppBar>
        <Drawer open={drawer} onClose={() => this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer()}
            onKeyDown={() => this.toggleDrawer()}
          >
            <MainMenu logo={ReactStarWarsLogo} />
          </div>
        </Drawer>
        <Dialog open={dialog} onClose={this.closeDialog} aria-labelledby="more-dialog-title">
          {this.dialogToRender()}
        </Dialog>
      </Fragment>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.shape({}),
};

NavBar.defaultProps = {
  classes: {},
};

const styles = theme => ({
  branding: {
    maxWidth: 150,
    display: 'flex',
  },
  imageResponsive: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

export default withStyles(styles)(NavBar);
