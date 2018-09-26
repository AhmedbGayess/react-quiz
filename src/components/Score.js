import React from "react";
import { connect } from "react-redux";
import {LinkContainer} from "react-router-bootstrap";
import { startAddScore, startSetScores } from "../actions/scores";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";

class Score extends React.Component {
    state = {
        playerName: "",
        scoreAdded: false
    }
    onSubmitScore = (e) => {
        e.preventDefault();
        this.props.startAddScore({
            quiz: this.props.quiz,
            name: this.state.playerName,
            score: `${this.props.score}`
        });
        this.props.startSetScores();
        this.setState(() => ({ scoreAdded: true }));
    }
    onChangePlayerName = (e) => {
        const playerName = e.target.value;
        this.setState(() => ({ playerName }));
    }
    render() {
        return (
            <div className="quiz-container">
                <h3>Your Results</h3>
                <p>You got {this.props.score} point(s) out of {this.props.totalPoints}</p>
                {
                    this.state.scoreAdded ? 
                    (
                        <div>
                        <h3>Your score has been added!</h3>
                            <LinkContainer to="/select">
                            <Button>Take Another Quiz</Button>
                            </LinkContainer>                        
                        </div>
                    ) : (
                        <div>
                            <Form
                                inline
                                onSubmit={this.onSubmitScore}
                            >
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        placeholder="Type your name"
                                        onChange={this.onChangePlayerName}
                                        required
                                    />
                                    <Button type="submit">Save Your Score</Button>
                                </FormGroup>
                            </Form>
                        </div>

                    )
                }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddScore: (score) => dispatch(startAddScore(score)),
    startSetScores: () => dispatch(startSetScores())
})

export default connect(undefined, mapDispatchToProps)(Score);