import './App.css'

import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'


import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'

function App() {
  const [quizState, dispatch] = useContext(QuizContext) 


  // EMBARALHAR PERGUNTAS NO COMEÇO DO QUIZ

  return (
    <div className='App'>
      <h1>Quiz geek</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
