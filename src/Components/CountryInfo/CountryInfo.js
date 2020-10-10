import React from 'react';
import { useParams } from 'react-router-dom';

const CountryInfo = (props) => {
    const {countryName} = useParams();
    const {name,capital,region,population,area,flag} = props.countryInfo;
    
    return (
        <div>
            <h2>The Detail Information Of Country : {countryName}</h2>
            <div  className="country-container">
                <img style ={{height:'100px'}} src = {flag}></img>
                <h4>Name : {name}</h4>
                <p>Capital City : <strong>{capital}</strong></p>
                <p>Region : {region}</p>
                <p>Population : <small>{population}</small></p>
                <p>Area : <small>{area}</small></p>
            </div>
            
        </div>
    );
};

export default CountryInfo;