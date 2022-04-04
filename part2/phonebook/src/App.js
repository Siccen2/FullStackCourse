import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, SetNewNumber] = useState('')
  const [search, SetSearch] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    let sameName = persons.find(person => person.name === newName)
    if (typeof sameName === 'undefined') {
      const nameObject = {
        name: newName, number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      SetNewNumber('')
    }
    else {
      window.alert(window.alert(newName + 'is already added to the phonebook'))
    }
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    SetNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    SetSearch(event.target.value)
  }

  const searchName = persons.filter(person => person.name.includes(search))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter header= 'filter shown with'
      name={search} handleFunction={handleSearchChange} />
      <h2>Add a New</h2>
      <PersonForm addName={addName} newName={newName}
      handleNoteChange={handleNoteChange} newNumber={newNumber}
      handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons searchName={searchName} />
    </div>
  )
}

export default App