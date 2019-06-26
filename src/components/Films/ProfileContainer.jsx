import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import { fetchFilm } from '../../store/actions/filmActions';
import Profile from './Profile';
import Loader from '../Loader';
import Error from '../Error';

import { ThePhantomMenace } from './filmImages';

class FilmProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      FETCH_FILM,
      match: {
        params: { id },
      },
    } = this.props;
    FETCH_FILM(id);
  }

  render() {
    const { FILM } = this.props;
    let content;

    if (FILM.fetching) {
      content = <Loader />;
    } else if (FILM.error) {
      content = <Error />;
    } else {
      content = <Profile film={FILM.film} poster={ThePhantomMenace} />;
    }

    return <Container>{content}</Container>;
  }
}

FilmProfileContainer.propTypes = {
  FETCH_FILM: PropTypes.func.isRequired,
  FILM: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  FILM: state.films,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    FETCH_FILM: fetchFilm,
  },
  dispatch,
);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FilmProfileContainer),
);
