import React from "react";
import { connect } from "react-redux";
import QuizLeaderboard from "./QuizLeaderboard";
import { FormGroup, FormControl } from "react-bootstrap";

class LeaderboardPage extends React.Component {
    state = {
        currentQuiz: ""
    }
    handleSetQuiz = (e) => {
        const currentQuizTitle = e.target.value;
        const currentQuiz = this.props.scores.find((score) => score.quiz === currentQuizTitle)
        this.setState(() => ({ currentQuiz }));
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Leaderboard</h1>
                    <p>Select a quiz to see it's leaderboard. Only quizzes that has been taken at least once will appear.</p>
                </div>
                <FormGroup>
                    <FormControl componentClass="select" onChange={this.handleSetQuiz}>
                        <option value="select" >-</option>
                        {this.props.scores.map((score, index) => <option key={index}>{score.quiz}</option>)}
                    </FormControl>
                </FormGroup>
                <div>
                    {this.state.currentQuiz && <QuizLeaderboard quizScore={this.state.currentQuiz} />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    scores: state.scores
});

export default connect(mapStateToProps)(LeaderboardPage);