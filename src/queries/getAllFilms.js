import { gql } from 'apollo-boost';

const GET_ALL_FILMS = gql`
  query films($orderBy: FilmOrderByInput) {
    films(orderBy: $orderBy) {
      id
      title
      episodeId
    }
  }
`;

export default GET_ALL_FILMS;
