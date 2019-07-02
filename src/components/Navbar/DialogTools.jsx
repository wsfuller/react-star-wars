import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import Image from '../Image';

import LoveIcon from '../../assets/images/icons/love.svg';
import ReactIcon from '../../assets/images/icons/tools/react.svg';
import GraphqlIcon from '../../assets/images/icons/tools/graphql.svg';
import ApolloIcon from '../../assets/images/icons/tools/apollo.svg';
import ReactRouterIcon from '../../assets/images/icons/tools/react-router.svg';
import WebpackIcon from '../../assets/images/icons/tools/webpack.svg';
import MaterialUiIcon from '../../assets/images/icons/tools/material-ui.svg';
import BabelIcon from '../../assets/images/icons/tools/babel.svg';
import NetlifyIcon from '../../assets/images/icons/tools/netlify.svg';
import GitHubIcon from '../../assets/images/icons/tools/github.svg';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.gutters,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.paper.backgroundColor,
  },
  dialogTitle: {
    textAlign: 'center',
  },
  gridItem: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 75,
    height: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: '#000000',
  },
}));

const icons = [
  {
    name: 'React',
    iconSrc: ReactIcon,
    altText: 'ReactJS logo',
  },
  {
    name: 'GraphQL',
    iconSrc: GraphqlIcon,
    altText: 'GraphQL logo',
  },
  {
    name: 'Apollo Client',
    iconSrc: ApolloIcon,
    altText: 'Apollo Client logo',
  },
  {
    name: 'React Router',
    iconSrc: ReactRouterIcon,
    altText: 'React Router logo',
  },
  {
    name: 'Webpack',
    iconSrc: WebpackIcon,
    altText: 'Webpack logo',
  },
  {
    name: 'Material-UI',
    iconSrc: MaterialUiIcon,
    altText: 'Material-UI framework logo',
  },
  {
    name: 'Babel',
    iconSrc: BabelIcon,
    altText: 'Babel logo',
  },
  {
    name: 'Netlify',
    iconSrc: NetlifyIcon,
    altText: 'Netlify logo',
  },
  {
    name: 'GitHub',
    iconSrc: GitHubIcon,
    altText: 'GitHub logo',
  },
];

const DialogTools = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <DialogTitle className={classes.dialogTitle}>
        Made with
        <img src={LoveIcon} alt="Red Heart" height="30" />
        using
      </DialogTitle>
      <DialogContent className={classes.container}>
        <Grid container justify="center" alignItems="center">
          {icons.map(icon => (
            <Grid item xs={6} sm={4} key={icon.name} className={classes.gridItem}>
              <Paper className={classes.paper} elevation={1}>
                <div className={classes.iconWrapper}>
                  <Image src={icon.iconSrc} alt={icon.altText} />
                </div>
                <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
                  {icon.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Fragment>
  );
};

export default DialogTools;
