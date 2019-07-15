import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

import GET_CHARACTER from '../../queries/getCharacter';
import Profile from './Profile';
import Loader from '../Loader';
import Error from '../Error';

const CharacterProfileContainer = ({
  match: {
    params: { id },
  },
}) => (
  <Query query={GET_CHARACTER} variables={{ id: `${id}` }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <Error message={error} />;

      return (
        <Fragment>
          <Helmet>
            <title>{`React Star Wars | ${data.Person.name}`}</title>
          </Helmet>
          <Profile character={data.Person} />
        </Fragment>
      );
    }}
  </Query>
);

CharacterProfileContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default withRouter(CharacterProfileContainer);
