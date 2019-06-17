import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleFilterInputChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <p>filter shown with <input onChange={handleFilterInputChange} /></p>
  )
}

export default Filter