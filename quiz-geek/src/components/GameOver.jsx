import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./GameOver.css"

import endImage from "../img/imagem-final.jpeg"

const GameOver = () => {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="game-over">
        <h2> Fim de Jogo! </h2>
        <p>Sua pontuação é: {quizState.score}</p>
        <p>Voçẽ acertou {quizState.score} de {quizState.questions.length} Perguntas!</p>
        <img src={endImage} alt="Jogo termianado" id="end-Image"/>
        <button onClick={() => dispatch({type: "New_Game"})}>Reiniciar quiz</button>
    </div>
  )
}

export default GameOver