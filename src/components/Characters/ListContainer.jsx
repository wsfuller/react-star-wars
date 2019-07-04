import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import GET_ALL_CHARACTERS from '../../queries/getAllCharacters';
import CharactersList from './List';
import Loader from '../Loader';
import Error from '../Error';

const FilmsListContainer = ({ orderBy, gridOptions }) => (
  <Query query={GET_ALL_CHARACTERS} variables={{ orderBy }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <Error message={error} />;

      return <CharactersList characters={data.allPersons} grid={gridOptions} />;
    }}
  </Query>
);

FilmsListContainer.propTypes = {
  orderBy: PropTypes.string,
  gridOptions: PropTypes.shape({}),
};

FilmsListContainer.defaultProps = {
  orderBy: 'episodeId_ASC',
  gridOptions: {},
};

export default FilmsListContainer;
