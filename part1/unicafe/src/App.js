import { useState } from 'react'

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <h3>No feedback given</h3>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad} </p>
      <p>all {props.all} </p>
      <p>average {props.average} </p>
      <p>positive {props.good / props.all} %</p>
    </>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = () => {
  return (
    <h1>Give Feedback</h1>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad

  let average = (good * 1 + neutral * 0 + bad * -1) / all




  return (
    <div>

      <Header />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} />




    </div>

  )
}

export default App