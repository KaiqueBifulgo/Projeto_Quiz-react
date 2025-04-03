import { Children, createContext, useReducer } from "react";

import questions from "../data/questions"


const stages = ["Start", "Playing", "End"]

const inicialState = {
    gameStage: stages[0],
    questions,
    currentQuestion: 0,
}

const quizReducer = (state, action) => {
    console.log(state, action)

    switch (action.type) {
        case "ChangeState" :
            return {
                ...state,
                gameStage: stages[1]
            };

        case "ReoderQuestions":
            const reorder = questions.sort(() => {
                return Math.random() - 0.5;
            }); 

            return {
                ...state,
                questions: reorder,
            };  

        default:
            return state;    
    }
}


export const QuizContext = createContext();

export const QuizProvider = ({ children}) => {
    const value = useReducer(quizReducer, inicialState);

    return <QuizContext.Provider value={value}>{ children }</QuizContext.Provider>
}