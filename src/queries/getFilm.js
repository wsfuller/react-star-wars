import { gql } from 'apollo-boost';

const GET_FILM = gql`
  query Film($id: ID!) {
    Film(id: $id) {
      title
      director
      producers
      releaseDate
      openingCrawl
      characters {
        id
        name
      }
      planets {
        id
        name
      }
      species {
        id
        name
      }
      starships {
        id
        name
      }
      vehicles {
        id
        name
      }
    }
  }
`;

export default GET_FILM;
