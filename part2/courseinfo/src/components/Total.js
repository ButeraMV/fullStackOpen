import React from 'react'

const Total = ({ parts }) => {
  const total = parts.reduce((accumulator, part) => accumulator + part.exercises, 0)

  return (
    <p><strong>total of {total} exercises</strong></p>
  )
}

export default Total