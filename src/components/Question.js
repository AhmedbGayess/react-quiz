import React from "react";
import { Form, Button, Radio } from "react-bootstrap";

class Question extends React.Component {
    state = {
        answer: ""
    }
    onAnswerChange = (e) => {
        const answer = e.target.value;
        this.setState({ answer });
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.answer === this.props.correctAnswer) {
            this.props.handleScore();
        }
        this.props.handleNextQuestion();
    }
    render() {
        return (
            <div className="quiz-question-container">
                <Form onSubmit={this.onSubmit}>
                    <h3 className="quiz-question__text">{this.props.question}</h3>
                    {
                        this.props.answers.map((answer, index) => {
                            return (
                                <div key={index}>
                                    <Radio
                                        name="answer"
                                        value={answer}
                                        onClick={this.onAnswerChange}
                                    >
                                        <p>{answer}</p>
                                    </Radio>
                                </div>
                            );
                        })
                    }
                    <Button type="submit">Confirm</Button>
                </Form>
            </div>
        );
    }
}

export default Question;