import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import Container from '@material-ui/core/Container';

import GET_ALL_FILMS from '../../queries/getAllFilms';
import FilmsList from './List';
import Loader from '../Loader';
import Error from '../Error';

const FilmsListContainer = ({ filmsOrderBy, numberOfFilms }) => (
  <Query query={GET_ALL_FILMS} variables={{ orderBy: filmsOrderBy, first: numberOfFilms }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <Error message={error} />;

      return (
        <Container>
          <FilmsList films={data.allFilms} />
        </Container>
      );
    }}
  </Query>
);

FilmsListContainer.propTypes = {
  filmsOrderBy: PropTypes.string,
  numberOfFilms: PropTypes.number,
};

FilmsListContainer.defaultProps = {
  filmsOrderBy: 'episodeId_ASC',
  numberOfFilms: 100,
};

export default FilmsListContainer;
