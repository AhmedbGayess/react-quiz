import React from "react";
import { connect } from "react-redux";
import QuizzesList from "./QuizzesList";
import visibleQuizzes from "../selectors/quizzes";
import QuizzesListFilter from "./QuizzesListFilter";

const SelectQuizPage = (props) => (
    <div>
        <div>
            <h1>Select a Quiz</h1>
            <p>Select a quiz from the list or search a specific one. You can sort the quizzes by alphabectical order or by their date of creation.</p>
        </div>

        <div>
            <QuizzesListFilter quizzes={props.quizzes} />
        </div>
        <div>
            <QuizzesList quizzes={props.quizzes} />
        </div>
    </div>

);

const mapStateToProps = (state) => ({
    quizzes: visibleQuizzes(state.quizzes, state.quizzesFilters)
})

export default connect(mapStateToProps)(SelectQuizPage);