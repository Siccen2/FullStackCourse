import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonsService from './services/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, SetNewNumber] = useState('')
  const [search, SetSearch] = useState('')

  useEffect(() => {
    PersonsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    console.log('promise fulfilled')
  }, [])

  console.log('render', persons.length, 'persons')

  const deleteAccount = (event) => {
    event.preventDefault()
    const id = parseInt(event.target.value)
    const personname = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${personname.name}?`)){
      PersonsService
      .remove(id)
      .then(response => {
          setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    let sameName = persons.find(person => person.name === newName)
    if (typeof sameName === 'undefined') {
      const nameObject = {
        name: newName, number: newNumber
      }
      PersonsService
      .create(nameObject)
      .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
      })
     
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
      <Filter header='filter shown with'
        name={search} handleFunction={handleSearchChange} />
      <h2>Add a New</h2>
      <PersonForm addName={addName} newName={newName}
        handleNoteChange={handleNoteChange} newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons searchName={searchName} deleteAccount={deleteAccount} />
    </div>
  )
}

export default App