import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./GameOver.css"

// Import img

const GameOver = () => {

  return (
    <div id="game-over">
        <h2> Fim de Jogo! </h2>
        <p>Sua pontuação é: x</p>
        <p>Voçẽ acertou x de y Perguntas!</p>
        {/* <img src="" alt="" /> */}
        <button>Reiniciar quiz</button>
    </div>
  )
}

export default GameOver