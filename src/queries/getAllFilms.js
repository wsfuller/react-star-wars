import { gql } from 'apollo-boost';

const GET_ALL_FILMS = gql`
  {
    allFilms {
      id
      title
      episodeId
    }
  }
`;

export default GET_ALL_FILMS;
