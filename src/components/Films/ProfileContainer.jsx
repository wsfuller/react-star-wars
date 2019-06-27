import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

import Container from '@material-ui/core/Container';

import GET_FILM from '../../queries/getFilm';
import Profile from './Profile';
import Loader from '../Loader';
import Error from '../Error';

import { ThePhantomMenace } from './filmImages';

const FilmProfileContainer = ({
  match: {
    params: { id },
  },
}) => (
  <Query query={GET_FILM} variables={{ id: `${id}` }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <Error message={error} />;

      return (
        <Container>
          <Profile film={data.Film} poster={ThePhantomMenace} />
        </Container>
      );
    }}
  </Query>
);

FilmProfileContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default withRouter(FilmProfileContainer);
