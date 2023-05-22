import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_CONTINENTS } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import styles from "./Continent.module.scss";



const Continent = () => {
  const { loading, error, data } = useQuery(GET_ALL_CONTINENTS);


  if(data) {
    console.log("data", data);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching data.</p>;
  }

  const continents = data.continents;

  return (
    <div>
      <h1>Continents</h1>
      <ul className={styles.list}>
        {continents.map((continent) => (
          <Link to={`/countries/${continent.code}`}>
            <li key={continent.code} className={styles.item}>{continent.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Continent;
