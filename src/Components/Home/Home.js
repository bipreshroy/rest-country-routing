import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
            setCountries(data);
            // console.log(data);
        })
    },[])
    return (
        <div>
            <h1>This is our home page</h1>
            <p>Total Country : {countries.length}</p>
            {
                countries.map(country =><Country country = {country}></Country>)
            }
        </div>
    );
};

export default Home;