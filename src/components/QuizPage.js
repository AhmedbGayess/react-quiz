import React from "react";
import { connect } from "react-redux";
import QuizStart from "./QuizStart";
import Question from "./Question";
import Score from "./Score";

class QuizPage extends React.Component {
    state = {
        score: 0,
        quizStarted: false,
        currentQuestion: 0,
        quizFinished: false
    }
    startQuiz = () => {
        this.setState(() => ({ quizStarted: true }));
    }
    handleScore = () => {
        this.setState((prevState) => ({
            score: prevState.score + 1
        }));
    }
    handleNextQuestion = () => {
        this.setState((prevState) => ({
            currentQuestion: prevState.currentQuestion + 1
        }));
        if (this.state.currentQuestion === this.props.currentQuiz.questions.length - 1) {
            this.setState(() => ({ quizFinished: true }));
        }
    }
    render() {
        return (
            <div>
                {
                    !this.state.quizStarted &&
                    <QuizStart
                        {...this.props.currentQuiz}
                        startQuiz={this.startQuiz}
                    />
                }

                {
                    this.state.quizStarted && this.props.currentQuiz.questions.map((question, index) => (
                        index === this.state.currentQuestion && (
                            <Question key={index}
                                {...question}
                                handleScore={this.handleScore}
                                handleNextQuestion={this.handleNextQuestion}
                            />
                        )
                    ))
                }

                {
                    this.state.quizFinished &&
                    <Score
                        score={this.state.score}
                        totalPoints={this.props.currentQuiz.questions.length}
                        quiz={this.props.currentQuiz.title}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    currentQuiz: state.quizzes.find((quiz) => quiz.id === props.match.params.id)
});

export default connect(mapStateToProps)(QuizPage);