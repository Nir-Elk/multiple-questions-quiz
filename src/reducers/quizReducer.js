import {CHOOSE_ACTION, DONE_ACTION, INIT_ACTION, NEXT_ACTION, PREV_ACTION} from "../actions/quizActions";
import data from "../data";

export default (state = {currentQuestion: 0, answers: data.questions.map(() => -1), grade: false}, action) => {
    console.log(action);
    switch (action.type) {
        case CHOOSE_ACTION:
            state.answers[state.currentQuestion] = action.payload;
            state.answers = [...state.answers];
            return {...state};
        case NEXT_ACTION:
            if (state.currentQuestion < data.questions.length - 1)
                state.currentQuestion++;
            return {...state};
        case PREV_ACTION:
            if (state.currentQuestion > 0)
                state.currentQuestion--;
            return {...state};
        case DONE_ACTION:
            const singleAnswerGrade = 100 / state.answers.length;
            state.grade = state.answers
                .map((answer, index) => (answer === data.questions[index].correctAnswer ? singleAnswerGrade : 0))
                .reduce((current, total) => current + total);
            return {...state};
        case INIT_ACTION:
            return {currentQuestion: 0, answers: data.questions.map(() => -1), grade: false};
        default:
            return state
    }
}