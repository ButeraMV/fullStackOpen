import React from 'react'
import Part from './Part'
import Total from './Total'


const Content = ({ course }) => {
  const parts = () => course.parts.map(part =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  )

  return (
    <>
      {parts()}
      <Total parts={course.parts} />
    </>
  )
}

export default Content