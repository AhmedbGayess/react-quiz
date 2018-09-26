export default (state = [], action) => {
    switch (action.type) {
        case "ADD_SCORE":
            return [...state, action.playerScore]
        case "SET_SCORES":
            return action.scores
        default:
            return state
    }
}