import React from 'react';
import '../App.css';
import Weather from './Weather'

const Country = ({ country }) => {
  const languageList = country.languages.map((l) => <li key={l.name}>{l.name}</li>)

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>languages</h2>
      {languageList}
      <img src={country.flag} alt={`flag of ${country.name}`} id="flag" />
      <Weather city={country.capital} />
    </div>
  )
}

export default Country