import { Children, createContext, useReducer } from "react";

import questions from "../data/questions_complete"


const stages = ["Start", "Category", "Playing", "End"]

const inicialState = {
    gameStage: stages[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    help: false,
}

const quizReducer = (state, action) => {

    switch (action.type) {
        case "ChangeState" :{
            return {
                ...state,
                gameStage: stages[1]
            };
        }


        case "Start_Game": {
            let quizQuestions = null;

            state.questions.forEach((question) => {
                if (question.category === action.payload) {
                    quizQuestions = question.questions
                }
            })

            return {
                ...state,
                questions: quizQuestions,
                gameStage: stages[2]
            }
        }

        case "Reorder_Questions": {
            const reorder = state.questions.sort(() => {
                return Math.random() - 0.5;
            });
            

            return {
                ...state,
                questions: reorder,
            };  
        }

        case "Next_Question": {
            const nextQuestion = state.currentQuestion + 1 ;
            let endGame = false;

            if(!questions[nextQuestion]) {
                endGame = true;
            }
            
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? stages[3] : state.gameStage,
                answerSelected: false,
                help: false,
            }
        }

        case "New_Game": 
            return inicialState;
            

        case "Check_Answer": {
            if (state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if (answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }    
        }


        case "Show_Tip": 
            return {
                ...state,
                help: "tip",
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