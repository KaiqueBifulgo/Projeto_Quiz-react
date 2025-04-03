import './App.css'

import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'


import Welcome from './components/Welcome'
import Question from './components/Question'

function App() {
  const [quizState, dispatch] = useContext(QuizContext) 


  // EMBARALHAR PERGUNTAS NO COMEÇO DO QUIZ
  useEffect(() => {
    dispatch({ type:" ReorderQuestions"})
  }, [])

  return (
    <div className='App'>
      <h1>Quiz geek</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  )
}

export default App
