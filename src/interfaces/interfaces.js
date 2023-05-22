interface Country {
    code: string;
    name: string;
  }
  
  interface Continent {
    name: string;
    countries: Country[];
  }
  
  interface GetCountriesInContinentData {
    continent: Continent | null;
  }