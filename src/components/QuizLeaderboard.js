import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const QuizLeaderboard = (props) => (
    <div>
        <h2>{props.quizScore.quiz}</h2>
        <ListGroup >
            {props.quizScore.scores
                .sort((a, b) => {
                    return a.score < b.score ? 1 : -1;
                })
                .map((playerScore, index) => (
                    <ListGroupItem key={index} header={<p className="leaderboard-item-header">{index + 1} - {playerScore.name}</p>}>
                        <span className="leaderboard-item-description">Score: {playerScore.score}</span>
                        <br/>
                        <span className="leaderboard-item-description">{playerScore.complitedAt}</span>
                    </ListGroupItem>
                ))}
        </ListGroup>
    </div >
);

export default QuizLeaderboard;