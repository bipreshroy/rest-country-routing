import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryInfo from '../CountryInfo/CountryInfo';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [country,setCountry] = useState([]);
    
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
       <div>
            {
                country.map(countryInfo => <CountryInfo countryInfo = {countryInfo}></CountryInfo>)
            }
       </div>
    );        
};

export default CountryDetails;