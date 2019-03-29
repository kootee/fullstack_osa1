import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = ({good, neutral, bad}) => {
    const sum = good + neutral + bad
    const median = (good - bad)/sum
    const positive = (good / sum * 100).toFixed(0)
    if (sum === 0) {
        return (
            <div>
                <p>Ei yhtään palautetta annettu </p>
            </div>
        )
    } else {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>hyvä</td>
                            <td>{good}</td>
                        </tr>
                        <tr>
                            <td>neutraali</td>
                            <td>{neutral}</td>
                        </tr>
                        <tr>
                            <td>huono</td>
                            <td>{bad}</td>
                        </tr>
                        <tr>
                            <td>yhteensä</td>
                            <td>{sum}</td>
                        </tr>
                        <tr>
                            <td>keskiarvo</td>
                            <td>{median}</td>
                        </tr>
                        <tr>
                            <td>positiivisia</td>
                            <td>{positive} %</td>
                        </tr>
                    </tbody>
                </table> 
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
