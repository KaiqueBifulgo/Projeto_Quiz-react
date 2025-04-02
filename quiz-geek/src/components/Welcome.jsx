import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Welcome.css"

import imgInicial from "../img/Imagem-inicial.jpg"

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext) 

  return (
    <div id="welcome-container">
        <h2>Bem vindo ao quiz geek!</h2>
        <p>Clique no botão abaixo para começar o quiz!</p>
        <button onClick={() => dispatch({type: "ChangeState"})}>Start</button>
        <img src={imgInicial} alt="Começar quiz" />
    </div>
  )
}

export default Welcome