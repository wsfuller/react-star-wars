import React, { Component } from 'react';
import _ from 'lodash/collection';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Container from '@material-ui/core/Container';

import { fetchFilms } from '../../store/actions/filmActions';
import FilmsList from './List';
import Loader from '../Loader';
import Error from '../Error';

class FilmsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { FETCH_FILMS } = this.props;
    FETCH_FILMS();
  }

  render() {
    const { FILMS } = this.props;
    let content;

    if (FILMS.fetching) {
      content = <Loader />;
    } else if (FILMS.error) {
      content = <Error />;
    } else {
      content = <FilmsList films={_.orderBy(FILMS.films, ['episode_id'], ['asc'])} />;
    }

    return <Container>{content}</Container>;
  }
}

FilmsListContainer.propTypes = {
  FETCH_FILMS: PropTypes.func.isRequired,
  FILMS: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  FILMS: state.films,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    FETCH_FILMS: fetchFilms,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsListContainer);
