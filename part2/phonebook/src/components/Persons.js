import React from 'react'

const Persons = ({searchName}) => {
  return (
    <div>{searchName.map(person =>
      <div key={person.id}>{person.name} {person.number}</div>
    )}
    </div>
  )
}

export default Persons