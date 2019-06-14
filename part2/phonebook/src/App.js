import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')
    
    const rows = () => persons.map(person => <Person key={person.name} person={person} />)
    
    const handleNameInputChange = (e) => {
        setNewName(e.target.value)
    }

    const addPerson = (e) => {
        e.preventDefault()
        const personObject = {
            name: newName,
        }

        setPersons(persons.concat(personObject))
        setNewName('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleNameInputChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {rows()}
        </div>
    )
}

export default App