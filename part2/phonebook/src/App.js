import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [persons,setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, SetNewNumber] = useState('')
  const [search, SetSearch] = useState('')

  const hook = () => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
    console.log('promise fulfilled')
  }

  useEffect(hook,[])

  console.log('render',persons.length,'persons')


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