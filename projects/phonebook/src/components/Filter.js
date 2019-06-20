import React from 'react';

const Filter = ({ filter, changeEvent }) => {
  return (
    <p>filter shown with <input onChange={changeEvent} /></p>
  )
}

export default Filter