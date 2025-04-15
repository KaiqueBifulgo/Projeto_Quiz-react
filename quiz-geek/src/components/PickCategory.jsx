import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import ImgCategory from "../img/categorias.jpeg"
import "./PickCategory.css"

const PickCategory = () => {
  return (
    <div id="category">
      <h2>Qual Categoria deseja escolher?</h2>
      <p>Escolha a categoria das suas perguntas..</p>
      <div>
        <button>Geek</button>
      </div>
      <img src={ImgCategory} alt="Categorias" />
    </div>
  )
}

export default PickCategory