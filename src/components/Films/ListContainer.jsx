import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import FilmsList from './FilmsList';
import { fetchFilms } from '../../store/actions/filmActions';

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
    return <h1>Films List</h1>;
  }
}

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
