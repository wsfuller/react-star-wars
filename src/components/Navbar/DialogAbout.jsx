import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Link from '../Link';

const useStyles = makeStyles(theme => ({
  textSection: {
    marginBottom: theme.spacing(1),
  },
}));

const DialogAbout = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <DialogTitle>About React Star Wars</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.textSection}>
          React Star Wars is a simple application built with React, Apollo Client, GraphQL, and the
          Star Wars API (aka SWAPI). Orignally built with using the RESTful version of
          <Link href="https://swapi.co/" text="SWAPI" external />
          this app quickly pivoted to the
          <Link
            href="https://graphiql.graphcms.com/simple/v1/swapi"
            text="GraphCMS SWAPI GraphQL Port."
          />
          GraphQL was ultimately chosen over the traditional RESTful service because of the ability
          to build out profiles in a single HTTP request.
        </DialogContentText>
        <DialogContentText className={classes.textSection}>
          On top of the other tools mentioned, the UI was built using
          <Link
            href="https://material-ui.com/"
            target="_blank"
            rel="noopener noreferrer"
            text="Material-UI"
          />
          and
          <Link
            href="http://cssinjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            text="JavaScriptStyles (JSS)"
          />
          for a completely JavaScript driven application.
        </DialogContentText>
        <DialogContentText>
          So take a look around and maybe learn a little more about Star Wars, which I certainly
          did. You can also
          <Link href="https://williamsfuller.com" text="checkout my portfolio site" />
          if you are interested in other projects I have worked on or currently working on.
        </DialogContentText>
      </DialogContent>
    </Fragment>
  );
};

export default DialogAbout;
