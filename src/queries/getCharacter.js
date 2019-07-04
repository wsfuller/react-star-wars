import { gql } from 'apollo-boost';

const GET_CHARACTER = gql`
  query Person($id: ID!) {
    Person(id: $id) {
      id
      name
      gender
      height
      mass
      birthYear
      eyeColor
      homeworld {
        id
        name
      }
      species {
        id
        name
      }
      films {
        id
        title
      }
    }
  }
`;

export default GET_CHARACTER;
