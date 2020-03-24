import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import GET_ALL_FILMS from '../../queries/getAllFilms';
import FilmsList from './List';
import Loader from '../Loader';
import Error from '../Error';

const FilmsListContainer = ({ filmsOrderBy, numberOfFilms, gridOptions }) => (
  <Query query={GET_ALL_FILMS} variables={{ orderBy: filmsOrderBy, first: numberOfFilms }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <Error message={error} />;

      return <FilmsList films={data.films} grid={gridOptions} />;
    }}
  </Query>
);

FilmsListContainer.propTypes = {
  filmsOrderBy: PropTypes.string,
  numberOfFilms: PropTypes.number,
  gridOptions: PropTypes.shape({})
};

FilmsListContainer.defaultProps = {
  filmsOrderBy: 'episodeId_ASC',
  numberOfFilms: 100,
  gridOptions: {}
};

export default FilmsListContainer;
