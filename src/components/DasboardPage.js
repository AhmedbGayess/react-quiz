import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import visibleQuizzes from "../selectors/quizzes";
import QuizzesList from "./QuizzesList";
import QuizzesListFilter from "./QuizzesListFilter";
import { Button } from "react-bootstrap";

const DashboardPage = (props) => (
    <div>
        <div className="question-form-btn-container">
            <LinkContainer to="/create">
                <Button bsSize="lg">Create New Quiz</Button>
            </LinkContainer>
        </div>
        <div>
            <div>
                <h1>My Quizzes</h1>
                <p>This is the list of the quizzes you created. You can search for a specific one and sort them by date or by title.</p>
            </div>
            <div>
                <QuizzesListFilter quizzes={props.quizzes} />
            </div>
            <div>
                <QuizzesList quizzes={props.quizzes} />
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    quizzes: visibleQuizzes(state.userQuizzes, state.quizzesFilters)
});

export default connect(mapStateToProps)(DashboardPage);
