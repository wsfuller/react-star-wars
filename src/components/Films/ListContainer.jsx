import React from 'react';
import { Query } from 'react-apollo';

import Container from '@material-ui/core/Container';

import GET_ALL_FILMS from '../../queries/getAllFilms';
import FilmsList from './List';
import Loader from '../Loader';
import Error from '../Error';

const FilmsListContainer = ({ filmsOrderBy }) => (
  <Query query={GET_ALL_FILMS} variables={{ orderBy: filmsOrderBy }}>
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

export default FilmsListContainer;
