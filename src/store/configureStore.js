import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userQuizzesReducer from "../reducers/userQuizzes";
import quizzesReducer from "../reducers/quizzes";
import authReducer from "../reducers/auth";
import scoresReducer from "../reducers/scores";
import quizzesFiltersReducer from "../reducers/quizzesFilters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            userQuizzes: userQuizzesReducer,
            quizzes: quizzesReducer,
            auth: authReducer,
            scores: scoresReducer,
            quizzesFilters: quizzesFiltersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}