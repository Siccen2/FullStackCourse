import React, { useState, useEffect } from 'react'
import axios from 'axios'


const NationFinder = ({ nationstoshow, setSearchWord }) => {
  if (nationstoshow.length === 1) {
    return (
      <div>
        <h1>{nationstoshow[0].name.common}</h1>
        <div>
          Capital {nationstoshow[0].capital.toString()}
        </div>
        <div>
          Area {nationstoshow[0].area.toString()}
        </div>
        <div>
          <h3>Languages</h3>
          <ul>
            {Object.values(nationstoshow[0].languages).map(language => <li key={language}>{language}</li>)}
          </ul>
          <div>
            <img src={nationstoshow[0].flags.png} alt={nationstoshow[0].name.common} height="100" width="100" />
          </div>
        </div>
      </div>
    )
  }
  else if (nationstoshow.length <= 10) {
    return (
      <div>
        {nationstoshow.map((nation) => <div key={nation.name.common}>{nation.name.common}
          <button type="button" onClick={() => setSearchWord(nation.name.common)}>show</button></div>)}
      </div>
    )
  }
  else {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

}


const App = () => {
  const [countries, setCountries] = useState([])
  const [searchWord, setSearchWord] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {

        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const nationstoshow = countries.filter(country => country.name.common.toLowerCase().includes(searchWord.toLowerCase().trim()))
  console.log('nationshow', nationstoshow)

  const handleSearchChange = (event) => {
    setSearchWord(event.target.value)
  }

  return (
    <div>
      find countries <input value={searchWord} onChange={handleSearchChange} />
      <div>
      </div>
      <NationFinder nationstoshow={nationstoshow} setSearchWord={setSearchWord} />

    </div >


  );
}

export default App;