import { gql } from 'apollo-boost';

const GET_ALL_CHARACTERS = gql`
  query allPersons($orderBy: PersonOrderByInput) {
    persons(orderBy: $orderBy) {
      id
      name
    }
  }
`;

export default GET_ALL_CHARACTERS;
