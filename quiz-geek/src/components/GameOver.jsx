import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./GameOver.css"

// Import img

const GameOver = () => {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="game-over">
        <h2> Fim de Jogo! </h2>
        <p>Sua pontuação é: {quizState.score}</p>
        <p>Voçẽ acertou {quizState.score} de {quizState.questions.length} Perguntas!</p>
        {/* <img src="" alt="" /> */}
        <button onClick={() => dispatch({type: "New_Game"})}>Reiniciar quiz</button>
    </div>
  )
}

export default GameOver