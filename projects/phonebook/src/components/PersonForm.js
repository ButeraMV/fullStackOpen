import React, { useState } from 'react';
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameInputChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberInputChange = (e) => {
    setNewNumber(e.target.value)
  }

  const clearForm = () => document.getElementById('addToPhonebookForm').reset()

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.findIndex(person => person.name === newName) === -1) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          clearForm()
        })
    } else {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
        updatePerson(personObject)
        clearForm()
      } else {
      alert(`${newName} is already added to the phonebook. Discarding changes.`)
      clearForm()
      }
    }
  }

  const updatePerson = (personObject) => {
    const personToChange = persons.find(p => p.name === personObject.name)
    const changedPerson = { ...personToChange, number: personObject.number }
    personService
      .update(personToChange.id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== personToChange.id ? person : returnedPerson))
      })
  }

  return (
    <form onSubmit={addPerson} id="addToPhonebookForm">
      <div>
        name: <input onChange={handleNameInputChange} />
      </div>
      <div>
        number: <input onChange={handleNumberInputChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm