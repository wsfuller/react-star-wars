import React from 'react';
import _ from 'lodash';
import { Query } from 'react-apollo';

import Container from '@material-ui/core/Container';

import GET_ALL_FILMS from '../../queries/getAllFilms';
import FilmsList from './List';
import Loader from '../Loader';
import Error from '../Error';

const FilmsListContainer = () => (
  <Query query={GET_ALL_FILMS}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <Error message={error} />;

      return (
        <Container>
          <FilmsList films={_.orderBy(data.allFilms, ['episodeId'], ['asc'])} />
        </Container>
      );
    }}
  </Query>
);

export default FilmsListContainer;
