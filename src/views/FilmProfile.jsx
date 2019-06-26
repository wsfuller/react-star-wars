import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import FilmProfileContainer from '../components/Films/ProfileContainer';

const FilmProfile = () => (
  <Fragment>
    <Helmet>
      <title>React Star Wars | Film Profile</title>
    </Helmet>
    <FilmProfileContainer />
  </Fragment>
);

export default FilmProfile;
