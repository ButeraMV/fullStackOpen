import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <p>find countries <input onChange={handleFilterChange} /></p>
    </div>
  )
}

export default App
