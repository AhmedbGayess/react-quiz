import database  from "../firebase/firebase";

const setQuizzes = (quizzes) => ({
    type: "SET_QUIZZES",
    quizzes
});

export default () => {
    return (dispatch) => {
       return database.ref("users").once("value").then((snapshot) => {
           const users = [];
           snapshot.forEach((snapshotChild) => {
               users.push(snapshotChild.val().quizzes)
           });
           const quizzes = [];
           users.forEach((user) => {
               for (const key of Object.keys(user)) {
                    quizzes.push({
                        id: key,
                        ...user[key]
                    });
               }
           });
           dispatch(setQuizzes(quizzes));
       });
    }
}