import React from 'react';
import Person from './Person'

const Persons = ({ filter, persons, deletePerson }) => {
  const rows = () => {
    if (filter === '') {
      return persons.map(person => <Person key={person.name} person={person} deletePerson={() => deletePerson(person.id)} />)
    } else {
      let personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter))
      return personsToShow.map(person => <Person key={person.name} person={person} deletePerson={() => deletePerson(person.id)} />)
    }
  }

  return (
    <>
      {rows()}
    </>
  )
}

export default Persons