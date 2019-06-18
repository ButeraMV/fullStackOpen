import React from 'react';

const ListCountries = ({ countries, buttonHandler }) => {
  const rows = () => countries.map(country => <li key={country.name}>{country.name} <button onClick={buttonHandler} country={country.name}>show</button></li>)

  return (
    <ul>
      {rows()}
    </ul>
  )
}

export default ListCountries