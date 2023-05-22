import React from 'react'
import styles from "./Country.module.scss";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { GET_COUNTRY_DETAILS } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

function Country() {



    const { countryCode } = useParams();
    const { loading, data, error, refetch } = useQuery(GET_COUNTRY_DETAILS, {
        variables: { code: countryCode },
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


    let country = data.country;

    return (
        <div>
            <div className={styles.item}>
                <li className={styles.countryName}>{country.name}</li>
                <p className={styles.flag}>{country.emoji}</p>
                <p>Currency: {country.currency}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </div>
    )
}

export default Country
