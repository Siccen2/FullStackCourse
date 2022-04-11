import React from 'react'

const Persons = ({searchName, deleteAccount}) => {
  return (
    <div>{searchName.map(person =>
      <div key={person.id}>{person.name} {person.number} <button type="button" value={person.id} onClick={deleteAccount}>delete</button></div>)}
    </div>
  )
}

export default Persons