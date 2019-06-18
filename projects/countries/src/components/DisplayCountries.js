import React from 'react';
import Country from './Country'
import ListCountries from './ListCountries'

const DisplayCountries = ({ countries, filter, buttonHandler}) => {
  let countriesToDisplay = countries

  if (filter) {
    countriesToDisplay = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  }

  if (countriesToDisplay.length < 1 || !filter) {
    return(<p></p>)
  }

  if (countriesToDisplay.length === 1) {
    return (<Country country={countriesToDisplay[0]} />)
  }

  if (countriesToDisplay.length > 10) {
    return (<p>Too many matches, please specify further</p>)
  }

  return (
    <>
      <ListCountries countries={countriesToDisplay} buttonHandler={buttonHandler} />
    </>
  )
}

export default DisplayCountries