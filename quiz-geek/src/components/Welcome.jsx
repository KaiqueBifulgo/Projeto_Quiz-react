import "./Welcome.css"

import imgInicial from "../img/Imagem-inicial.jpg"

const Welcome = () => {
  return (
    <div id="welcome-container">
        <h2>Bem vindo ao quiz geek!</h2>
        <p>Clique no botão abaixo para começar o quiz!</p>
        <button>Start</button>
        <img src={imgInicial} alt="Começar quiz" />
    </div>
  )
}

export default Welcome