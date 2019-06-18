import React, { useState, useEffect } from 'react'
import axios from 'axios'

import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const showCountryButtonHandler = (e) => {
    setFilter(e.target.attributes.country.value)
  }

  return (
    <div>
      <p>find countries <input onChange={handleFilterChange} /></p>
      <DisplayCountries countries={countries} filter={filter} buttonHandler={showCountryButtonHandler} />
    </div>
  )
}

export default App
