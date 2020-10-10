import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import './Country.css';
const Country = (props) => {
    const {name,capital} = props.country;
    const history = useHistory();
    const handleClicked = (countryName)=>{
        const url = `/country/${countryName}`
        history.push(url);
    }
    return (
        <div  className = "country-container">
            <p>Name :<Link to ={ `/country/${name}`}> {name}</Link></p>
            <p>Capital City : <strong>{capital}</strong></p>
            <button onClick = {()=>handleClicked(name)}>Country Detail</button>
        </div>
    );
};

export default Country;