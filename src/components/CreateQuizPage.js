import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { startCreateQuiz } from "../actions/userQuizzes";
import StartQuizForm from "./StartQuizForm";
import QuestionForm from "./QuestionForm";
import QuizCreatedPage from "./QuizCreatedPage";
import startSetQuizzes from "../actions/quizzes";
import { Button } from "react-bootstrap";

class CreateQuizPage extends React.Component {
    state = {
        quiz: {},
        questions: [],
        questionsForms: [],
        quizCreationStarted: false,
        quizCreated: false
    }
    onStartQuizSubmit = ({ title, difficulty }) => {
        this.setState(() => ({
            quiz: {
                title,
                difficulty
            },
            quizCreationStarted: true
        }));
        this.HandleAddQuestion();
    }
    onQuestionSubmit = (question) => {
        this.setState(() => ({
            questions: [
                ...this.state.questions,
                question
            ]
        }));
    }
    HandleAddQuestion = () => {
        this.setState((prevState) => ({
            questionsForms: prevState.questionsForms.concat(
                <QuestionForm
                    key={uuid()}
                    onQuestionSubmit={this.onQuestionSubmit}
                />
            )
        }));
    }
    onQuizSubmit = () => {
        this.props.startCreateQuiz({
            title: this.state.quiz.title,
            difficulty: this.state.quiz.difficulty,
            questions: [...this.state.questions]
        });
        this.setState(() => ({
            quizCreated: true
        }));
        this.props.startSetQuizzes();
    }
    render() {
        return (
            <div>
                <h1>Quiz Creation</h1>
                {
                    this.state.quizCreationStarted && !this.state.quizCreated ? (<p>You can add as many questions as you like to your quiz. You can 
                    also add as many answers as you want to each question, and you can also remove them. You have to submit at least 
                    one question before submitting the quiz.</p>) : ""
                }
                
                {
                    this.state.quizCreated ? (
                        <QuizCreatedPage />
                    ) : (
                            <div >

                                {!this.state.quizCreationStarted &&
                                    <StartQuizForm
                                        onStartQuizSubmit={this.onStartQuizSubmit}
                                    />}

                                {this.state.questionsForms}

                                {
                                    this.state.quizCreationStarted &&
                                    <div>
                                        <div className="question-form-btn-container question-form__container">
                                            <Button bsSize="lg" className="quiz-form-btn" onClick={this.HandleAddQuestion}>Add Question</Button>
                                            <Button bsSize="lg" className="quiz-form-btn" onClick={this.onQuizSubmit}>Submit Quiz</Button>
                                        </div>
                                    </div>

                                }

                            </div>
                        )
                }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startCreateQuiz: (quiz) => dispatch(startCreateQuiz(quiz)),
    startSetQuizzes: () => dispatch(startSetQuizzes())
})

export default connect(undefined, mapDispatchToProps)(CreateQuizPage);