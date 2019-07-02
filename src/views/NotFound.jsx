import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Section from '../components/Section';
import Image from '../components/Image';
import NotFoundImg from '../assets/images/not-found-vader.gif';

const useStyles = makeStyles(theme => ({
  image: {
    marginBottom: theme.spacing(4),
    borderRadius: theme.borderRadius.default,
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px',
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Helmet>
        <title>React Star Wars | 404</title>
      </Helmet>
      <main className={classes.main}>
        <Section>
          <Container>
            <Grid container justify="center" alignItems="center" direction="column" spacing={2}>
              <Image
                customClass={classes.image}
                src={NotFoundImg}
                alt="Animated gif of Darth Vader"
              />

              <Typography variant="h4" align="center" gutterBottom>
                Error 404
              </Typography>
              <Typography variant="h5" align="center">
                I find your lack of navigation disturbing
              </Typography>
            </Grid>
          </Container>
        </Section>
      </main>
    </Fragment>
  );
};

export default NotFound;
