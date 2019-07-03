import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

import GET_FILM from '../../queries/getFilm';
import Profile from './Profile';
import Loader from '../Loader';
import Error from '../Error';

const FilmProfileContainer = ({
  match: {
    params: { id },
  },
}) => (
  <Query query={GET_FILM} variables={{ id: `${id}` }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <Error message={error} />;

      return <Profile film={data.Film} />;
    }}
  </Query>
);

FilmProfileContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default withRouter(FilmProfileContainer);
