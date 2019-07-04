import { gql } from 'apollo-boost';

const GET_ALL_CHARACTERS = gql`
  query allPersons($orderBy: PersonOrderBy) {
    allPersons(orderBy: $orderBy) {
      id
      name
    }
  }
`;

export default GET_ALL_CHARACTERS;
