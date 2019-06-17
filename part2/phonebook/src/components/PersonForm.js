import React, { useState } from 'react';

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
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      clearForm()
    } else {
      alert(`${newName} is already added to the phonebook`)
      clearForm()
    }
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