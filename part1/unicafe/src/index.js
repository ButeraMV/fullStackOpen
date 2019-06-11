import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  let stats
  let average = ((good + (bad * -1)) / (good + neutral + bad)).toFixed(1)
  let positive = ((good / (good + neutral + bad)) * 100).toFixed(1) + "%"

  if (good === 0 && neutral === 0 && bad === 0) {
    stats = (
      <p>No feedback given</p>
    )
  } else {
    stats = (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text='good' value={good} />
            <Statistic text='neutral' value={neutral} />
            <Statistic text='bad' value={bad} />
            <Statistic text='all' value={good + neutral + bad} />
            <Statistic text='average' value={average} />
            <Statistic text='positive' value={positive} />
          </tbody>
        </table>
      </>
    )
  }

  return (
    <>
      {stats}
    </>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)