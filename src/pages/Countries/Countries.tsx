import React from 'react'
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { GET_COUNTRIES_IN_CONTINENT } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import styles from "./Countries.module.scss";


function Countries() {


  const { continentCode } = useParams();

  const { loading, data, error, refetch } = useQuery(GET_COUNTRIES_IN_CONTINENT, {
    variables: {
      continentCode: continentCode,
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const countries = data?.continent?.countries;



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
      <ul className={styles.list}>
        {countries.map((country: any) => (
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
