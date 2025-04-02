import { Children, createContext, useReducer } from "react";

import questions from "../data/questions"


const stages = ["Start", "Playing", "End"]

const inicialState = {
    gameStage: stages[0],
    questions
}

const quizReducer = (state, action) => {
    console.log(state, action)

    switch (action.type) {
        case "ChangeState" :
            return {
                ...state,
                gameStage: stages[1]
            }

        default:
            return state;    
    }
}


export const QuizContext = createContext();

export const QuizProvider = ({ children}) => {
    const value = useReducer(quizReducer, inicialState);

    return <QuizContext.Provider value={value}>{ children }</QuizContext.Provider>
}