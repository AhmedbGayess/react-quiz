import React from "react";
import { Button } from "react-bootstrap";

const QuizStart = (props) => (
    <div className="quiz-container">
        <h3>The Quiz you're taking is</h3>
        <div className="quiz-container">
            <h2 className="quiz-name">{props.title}</h2>
            <h4>Difficulty: {props.difficulty}</h4>
            <Button bsSize="lg" onClick={props.startQuiz}>Start Quiz</Button>
        </div>

    </div>
);
export default QuizStart;