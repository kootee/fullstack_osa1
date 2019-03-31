import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text} 
    </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [allVotes, addVote] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, updateMostVoted] = useState(0)

  const chooseRandomAnecdote = () => {
      const newAnecdote = Math.floor(Math.random()*anecdotes.length)
      setSelected(newAnecdote)
    }
    
    const newVote = () => {
      const copy = {...allVotes}
      copy[selected] += 1
      addVote(copy)
      compareVotes(copy)
    }

    const compareVotes = (props) => {
        const maxIndex = (props[selected] > allVotes[mostVoted]) ? selected : mostVoted
        updateMostVoted(maxIndex)
    }

    return (
    <div>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <p>has {allVotes[selected]} votes</p>
        <Button handleClick={() => chooseRandomAnecdote()} text='next anecdote' />
        <Button handleClick={() => newVote()} text='vote' />
        <h1>Anecdote with most votes</h1>
        <p>{props.anecdotes[mostVoted]} </p>
        <p>has {allVotes[mostVoted]} votes</p>
    </div>
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