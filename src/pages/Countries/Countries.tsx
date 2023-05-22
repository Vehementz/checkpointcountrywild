import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { GET_COUNTRIES_IN_CONTINENT } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import styles from "./Countries.module.scss";


function Countries() {

  const [searchQuery, setSearchQuery] = useState('');


  const { continentCode } = useParams();

  const { loading, data, error, refetch } = useQuery(GET_COUNTRIES_IN_CONTINENT, {
    variables: {
      continentCode: continentCode,
      name: searchQuery,
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const countries = data?.continent?.countries;

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };



  const filteredCountries = data?.continent?.countries.filter((country: any) =>
  country.name.toLowerCase().includes(searchQuery.toLowerCase())
);



  if (data) {
    console.log("data", data);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {


    return <p>Error occurred while fetching data.</p>;
  }




  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Countries</h1>

      <div className={styles.filterBox}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by country name"
        />
      </div>
      <ul className={styles.list}>
        {filteredCountries.map((country: any) => (
          <li key={country.code} className={styles.item}>
            <p>{country.emoji}</p>
            <Link to={`/country/${country.code}`}>{country.name}</Link>
          </li>
        ))}
      </ul>


    </div>
  )
}

export default Countries
