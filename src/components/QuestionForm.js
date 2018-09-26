import React from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button, Col, Thumbnail } from "react-bootstrap";

class QuestionForm extends React.Component {
    state = {
        question: "",
        answers: [],
        correctAnswer: "",
        answersInputs: ["input-1", "input-2"],
        questionAdded: false
    }

    onQuestionChange = (e) => {
        const question = e.target.value;
        this.setState(() => ({ question }));
    }
    onAnswerChange = (text, inputIndex) => {
        const answers = [...this.state.answers];
        answers[inputIndex] = text;
        this.setState(() => ({ answers }));
    }
    handleAddAnswer = () => {
        if (this.state.answersInputs.length !== 0) {
            const index = Number(this.state.answersInputs[this.state.answersInputs.length - 1].split("-")[1]);
            const newInput = `input-${index + 1}`
            this.setState(() => ({
                answersInputs: this.state.answersInputs.concat(newInput)
            }));
        } else {
            this.setState(() => ({
                answersInputs: this.state.answersInputs.concat("input-1")
            }));
        }

    }
    handleRemoveAnswer = (index) => {
        if (this.state.answersInputs.length > 1) {
            const answers = [...this.state.answers];
            answers.splice(index, 1);
            const answersInputs = [...this.state.answersInputs];
            answersInputs.splice(index - 1, 1);
            this.setState(() => ({
                answers,
                answersInputs
            }));
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onQuestionSubmit({
            question: this.state.question,
            answers: [...this.state.answers],
            correctAnswer: this.state.correctAnswer
        });
        this.setState(() => ({
            questionAdded: true
        }));
    }
    onChooseCorrectAnswer = (e) => {
        const correctAnswer = e.target.parentElement.nextSibling.children[0].value;
        this.setState(() => ({ correctAnswer }));
    }
    render() {
        return (

            this.state.questionAdded ? (
                <Thumbnail>
                    <h3>Question Added!</h3>
                </Thumbnail>
            ) : (
                    <Thumbnail>
                        <Form onSubmit={this.onSubmit}>
                            <div className="question-form__container">
                                <ControlLabel><h3>Question</h3></ControlLabel>
                                <FormControl type="text" placeholder="Enter a question" onChange={this.onQuestionChange} required />
                            </div>

                            <div className="question-form__container">
                                <label><h3>Answers</h3></label>
                                <p>Select on answer to choose it as the correct answer</p>
                                {this.state.answersInputs.map((input, index) => (
                                    <FormGroup key={input} className="question-form__container">
                                        <Col sm={1}>
                                            <input type="radio" name="answer" onChange={this.onChooseCorrectAnswer} required />
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl
                                                type="text"
                                                onChange={(e) => this.onAnswerChange(e.target.value, index)}
                                                placeholder="Enter an answer"
                                                required
                                            />
                                        </Col>
                                        <Col sm={1}>
                                            <Button className="remove-btn" onClick={() => this.handleRemoveAnswer(index)}>Remove</Button>
                                        </Col>

                                    </FormGroup>
                                ))
                                }
                            </div>
                            <div className="question-form-btn-container">
                                <Button onClick={this.handleAddAnswer}>Add Answer</Button>
                                <Button type="submit">Submit Question</Button>
                            </div>
                        </Form>
                    </Thumbnail>

                )
        );
    }
}

export default QuestionForm;


