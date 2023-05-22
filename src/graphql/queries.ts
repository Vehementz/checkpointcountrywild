import { gql } from '@apollo/client';

export const GET_COUNTRIES_IN_CONTINENT = gql`
  query GetCountriesInContinent($continentCode: ID!) {
    continent(code: $continentCode) {
      name
      countries {
        code
        name
      }
    }
  }
`;


export const GET_ALL_CONTINENTS =gql`
query GetAllContinents {
  continents {
    code
    name
  }
}
`;

