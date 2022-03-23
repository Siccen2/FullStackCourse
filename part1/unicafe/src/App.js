import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState({ goodNumber: 0 })
  const [neutral, setNeutral] = useState({ neutralNumber: 0 })
  const [bad, setBad] = useState({ badNumber: 0 })
  

  const goodClick = () => {
    const newClick = {
      goodNumber: good.goodNumber + 1
    }
    setGood(newClick)
    console.log('Good clicked')
  }

  const neutrualClick = () => {
    const newClick = {
      neutralNumber: neutral.neutralNumber + 1
    }
    setNeutral(newClick)
    console.log('Neutral clicked')
  }

  const badClick = () => {
    const newClick = {
      badNumber: bad.badNumber + 1
    }
    setBad(newClick)
    console.log('Bad clicked')
  }




  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={goodClick}>
        Good
      </button>

      <button onClick={neutrualClick}>
        Neutral
      </button>

      <button onClick={badClick}>
        Bad
      </button>

      <h1>Statistics</h1>
      <p>good {good.goodNumber}</p>
      <p>neutral {neutral.neutralNumber}</p>
      <p>bad {bad.badNumber} </p>
      <p>all {good.goodNumber + neutral.neutralNumber + bad.badNumber} </p>
      <p>average {(good.goodNumber * 1 + neutral.neutralNumber * 0 + bad.badNumber * -1) / (good.goodNumber + neutral.neutralNumber + bad.badNumber)} </p>
      <p>positive {good.goodNumber / (good.goodNumber + neutral.neutralNumber + bad.badNumber)} %</p>

    </div>

  )
}

export default App