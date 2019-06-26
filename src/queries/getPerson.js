import { gql } from 'apollo-boost';

const GET_PERSON = gql`
  {
    Person(id: "cj0nv9p8yewci0130wjy4o5fa") {
      name
    }
  }
`;

export default GET_PERSON;
