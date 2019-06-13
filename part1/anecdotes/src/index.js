import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 0)))
  }

  const vote = () => {
    const newVotes = votes.slice()
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={randomAnecdote}>Random Anecdote</button>
      <button onClick={vote}>Vote</button>
      <HighestVotes votes={votes} />
    </div>
  )
}

const HighestVotes = ({votes}) => {
  const highestVotesIndex = () => {
    var max = votes[0];
    var maxIndex = 0;

    for (var i = 1; i < votes.length; i++) {
        if (votes[i] > max) {
            maxIndex = i;
            max = votes[i];
        }
    }

    return maxIndex;
  }

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[highestVotesIndex()]}</p>
      <p>has {votes[highestVotesIndex()]} votes</p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)