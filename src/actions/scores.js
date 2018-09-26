import database from "../firebase/firebase";
import moment from "moment";

const addScore = (playerScore) => ({
    type: "ADD_SCORE",
    playerScore
});

export const startAddScore = (scoreData = {}) => {
    return (dispatch) => {
        const {
            quiz,
            name,
            score,
            complitedAt = moment().format("YYYY-MM-DD HH:mm")
        } = scoreData;
        const playerScore = { name, score, complitedAt };
        return database.ref(`scores/${quiz}`).push(playerScore).then(() => {
            dispatch(addScore(playerScore));
        })
    }
}

const setScores = (scores) => ({
    type: "SET_SCORES",
    scores
})

export const startSetScores = () => {
    return (dispatch) => {
        const scores = [];
        return database.ref("scores").once("value").then((snapshot) => {
            snapshot.forEach((snapshotChild) => {
                const playersScores = []
                snapshotChild.forEach((score) => {
                    playersScores.push(score.val())
                })
                scores.push({
                    quiz: snapshotChild.ref.key,
                    scores: playersScores
                });
            });
            dispatch(setScores(scores));
        });
    }
}