import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Option from "./Option"

import "./Question.css"

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext) 
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
      dispatch ({ 
        type: "Check_Answer",
        payload: { answer: currentQuestion.answer, option}
      })
    }

  return (
    <div id="question">
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
           {currentQuestion.options.map((option) => (
              <Option 
              option={option} 
              key={option} 
              answer={currentQuestion.answer} 
              selectOption={() => onSelectOption(option)}/>
           ))}
        </div>
       {!quizState.answerSelected && !quizState.help &&(
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispatch({type: "Show_Tip"})}>Quer uma Dica/</button>
          )}
        </>
       )}
       {!quizState.answerSelected && quizState.help === "tip" && <p>{currentQuestion.tip}</p>}
       {quizState.answerSelected && (
         <button onClick={() => dispatch({type: "Next_Question"})}>Continuar</button>
       )}
    </div>
  )
}

export default Question