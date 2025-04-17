import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import ImgCategory from "../img/categorias.jpeg"
import "./PickCategory.css"

const PickCategory = () => {

  const [quizState, dispatch] = useContext(QuizContext)

  const chooseAndReoder = (category) => {

    dispatch ({ type: "Start_Game", payload: category})

     dispatch({ type:"Reorder_Questions"});
  }

  return (
    <div id="category">
      <h2>Qual Categoria deseja escolher?</h2>
      <p>Escolha a categoria das suas perguntas..</p>
      <div>
        {quizState.questions.map((question) => (
          <button onClick={() => chooseAndReoder(question.category)} key={question.category}>{question.category}</button>
        ))}
      </div>
      <img src={ImgCategory} alt="Categorias" />
    </div>
  )
}

export default PickCategory