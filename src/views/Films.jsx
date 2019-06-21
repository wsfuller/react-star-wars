import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import FilmsListContainer from '../components/Films/ListContainer';

const Films = () => (
  <Fragment>
    <Helmet>
      <title>React Star Wars | Films</title>
    </Helmet>
    <FilmsListContainer />
  </Fragment>
);

export default Films;
