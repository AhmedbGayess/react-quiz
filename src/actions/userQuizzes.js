import database from "../firebase/firebase";
import moment from "moment";

export const createQuiz = (quiz) => ({
    type: "CREATE_QUIZ",
    quiz
});

export const startCreateQuiz = (quizData = {}) => {
    return (dispatch, getState) => {
        const {
            title = "",
            difficulty = "Easy",
            questions = [],
            createdAt = moment().format("MMMM Do YYYY, HH:mm")
        } = quizData;
        const quiz = { title, difficulty, questions, createdAt }
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/quizzes`).push(quiz).then((ref) => {
            dispatch(createQuiz({
                id: ref.key,
                ...quiz
            }))
        })
    }
}

export const editQuiz = (id, updates) => ({
    type: "EDIT_QUIZ",
    id,
    updates
});

export const startEditQuiz = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState.auth().uid;
        return database.ref(`users/${uid}/quizzes/${id}`).update({
            ...updates
        }).then(() => {
            dispatch(editQuiz(id, updates));
        })
    }
}

export const deleteQuiz = ({ id } = {}) => ({
    type: "DELETE_QUIZ",
    id
});

export const startDeleteQuiz = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/quizzes/${id}`).remove().then(() => {
            dispatch(deleteQuiz({ id }));
        })
    }
}

const setUserQuizzes = (quizzes) => ({
    type: "SET_USER_QUIZZES",
    quizzes
});

export const startSetUserQuizzes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/quizzes`).once("value").then((snapshot) => {
            const quizzes = [];
            snapshot.forEach((snapshotChild) => {
                quizzes.push({
                    id: snapshotChild.key,
                    ...snapshotChild.val()
                });
            });
            dispatch(setUserQuizzes(quizzes));
        });
    }
}
