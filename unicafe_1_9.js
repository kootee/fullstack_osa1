import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = props => (
    <div>
        {props.text} {props.value}
    </div>
)

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = ({good, neutral, bad}) => {
    const sum = good + neutral + bad //voisiko tähän viitata totalin ulkopuolelta?
    const median = (good - bad)/sum
    const positive = (good / sum * 100).toFixed(0)
    console.log(sum)
    if (sum === 0) {
        return (
            <div>
                <p>Ei yhtään palautetta annettu </p>
            </div>
        )
    } else {
        return(
            <div>
                <Statistic text="hyvä" value={good} />
                <Statistic text="neutraali" value={neutral} />
                <Statistic text="huono" value={bad} />
                <p>yhteensä {sum} </p>
                <p>keskiarvo {median} </p> 
                <p>positiivisia {positive} % </p> 
            </div>
            )
        }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const addFeedback = newFeedback => {
    console.log(newFeedback)  
    if (newFeedback === 'good') {
        setGood(good + 1) 
    } else if (newFeedback === 'neutral') {
        setNeutral(neutral + 1)
    } else {
        setBad(bad + 1)
        }
    }
  return (
    <div>
        <h1>Anna palautetta</h1>
        <Button handleClick= {() => addFeedback('good')} text='hyvä' />
        <Button handleClick= {() => addFeedback('neutral')} text='neutraali' />
        <Button handleClick= {() => addFeedback('bad')} text='huono' />
        <h2>Statistiikkaa</h2>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
