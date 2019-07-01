import { gql } from 'apollo-boost';

const GET_ALL_FILMS = gql`
  query allFilms($orderBy: FilmOrderBy, $first: Int!) {
    allFilms(orderBy: $orderBy, first: $first) {
      id
      title
      episodeId
    }
  }
`;

export default GET_ALL_FILMS;
