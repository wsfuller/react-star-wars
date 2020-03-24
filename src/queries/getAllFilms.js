import { gql } from 'apollo-boost';

const GET_ALL_FILMS = gql`
  query films($orderBy: FilmOrderByInput!, $first: Int!) {
    films(orderBy: $orderBy, first: $first) {
      id
      title
      episodeId
    }
  }
`;

export default GET_ALL_FILMS;
