import { gql } from 'apollo-boost';

const GET_ALL_FILMS = gql`
  query allFilms($orderBy: FilmOrderBy) {
    allFilms(orderBy: $orderBy) {
      id
      title
      episodeId
    }
  }
`;

export default GET_ALL_FILMS;
