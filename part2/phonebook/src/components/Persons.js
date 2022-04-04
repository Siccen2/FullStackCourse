import React from 'react'

const Persons = ({searchName}) => {
  return (
    <div>{searchName.map((person,id) => <div key={id}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default Persons