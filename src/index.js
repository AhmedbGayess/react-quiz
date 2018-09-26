import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/AppRouter';
import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";
import { startSetUserQuizzes } from "./actions/userQuizzes";
import startSetQuizzes from "./actions/quizzes";
import {startSetScores} from "./actions/scores";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

store.dispatch(startSetScores());
store.dispatch(startSetQuizzes());

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.querySelector("#root"));
        hasRendered = true;
    }
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetUserQuizzes()).then(() => {
            renderApp()
        });
    } else {
        store.dispatch(logout());
        renderApp()
    }
});


registerServiceWorker();
