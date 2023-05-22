import { gql } from '@apollo/client';

export const GET_COUNTRIES_IN_CONTINENT = gql`
  query GetCountriesInContinent($continentCode: ID!) {
    continent(code: $continentCode) {
      name
      countries {
        code
        name
        emoji
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




export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      code
      name
      native
      phone
      capital
      currency
      emoji
  

    }
  }
`;


      // continent
      // states