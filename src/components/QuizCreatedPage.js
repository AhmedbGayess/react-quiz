import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

const QuizCreatedPage = () => (
    <div className="created">
        <h2 className="created__text">Quiz successfully created!</h2>
        <div className="question-form-btn-container">
            <LinkContainer to="/select">
                <Button>Go to Homepage</Button>
            </LinkContainer>
            <LinkContainer to="/dashboard">
                <Button>Go to your page</Button>
            </LinkContainer>
        </div>
    </div>
);

export default QuizCreatedPage;
