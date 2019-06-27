import { gql } from 'apollo-boost';

const GET_FILM = gql`
  query Film($id: ID!) {
    Film(id: $id) {
      title
      director
      producers
      releaseDate
      openingCrawl
      species {
        id
      }
    }
  }
`;

export default GET_FILM;
