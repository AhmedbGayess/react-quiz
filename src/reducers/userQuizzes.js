const userQuizzesDefaultState = [];

export default (state = userQuizzesDefaultState, action) => {
    switch(action.type) {
        case "CREATE_QUIZ":
            return [
                ...state,
                action.quiz
            ]
        case "EDIT_QUIZ":
            return state.map((quiz) => {
                if (quiz.id === action.id) {
                    return {
                        ...quiz,
                        ...action.updates
                    }
                } else {
                    return quiz;
                }
            });
        case "DELETE_QUIZ":
            return state.filter((quiz) => quiz.id !== action.id);
        case "SET_USER_QUIZZES":
            return action.quizzes
        default:
            return state
    }
}