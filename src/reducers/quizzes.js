const quizzesDefaultState = [];

export default (state = quizzesDefaultState, action) => {
    switch (action.type) {
        case "SET_QUIZZES":
            return action.quizzes
        default:
            return state
    }
}