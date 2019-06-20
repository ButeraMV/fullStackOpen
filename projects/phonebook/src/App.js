import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState({message: null, type: null})

  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons)
      })
  }, [])

  const handleFilterInputChange = (e) => {
    setFilter(e.target.value)
  }

  const deletePersonButtonHandler = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(res => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

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
          setNotification({message: `Added ${returnedPerson.name}`, type: 'success'})
          setTimeout(() => {
            setNotification({ message: null, type: null })
          }, 5000)
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
        setNotification({ message: `${returnedPerson.name} has been updated.`, type: 'success' })
        setTimeout(() => {
          setNotification({ message: null, type: null })
        }, 5000)
      })
      .catch(error => {
        setNotification({ message: `${personToChange.name} was already deleted from server.`, type: 'fail' })
        setPersons(persons.filter(person => person.id !== personToChange.id))
        setTimeout(() => {
          setNotification({ message: null, type: null })
        }, 5000)
      })
  }

  const handleNameInputChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberInputChange = (e) => {
    setNewNumber(e.target.value)
  }

  const clearForm = () => document.getElementById('addToPhonebookForm').reset()

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filter={filter} changeEvent={handleFilterInputChange} />
      <h2>Add new</h2>
      <PersonForm 
        submitEvent={addPerson}
        nameChange={handleNameInputChange}
        numberChange={handleNumberInputChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePersonButtonHandler} />
    </div>
  )
}

export default App