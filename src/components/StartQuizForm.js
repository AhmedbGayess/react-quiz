import React from "react";
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from "react-bootstrap";

class StartQuizForm extends React.Component {
    state = {
        title: "",
        difficulty: "Easy"
    }
    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({ title }));
    }
    onDifficultyChange = (e) => {
        const difficulty = e.target.value;
        this.setState(() => ({ difficulty }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onStartQuizSubmit(this.state)
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup >
                    <Col componentClass={ControlLabel} sm={2}>
                        Quiz Title
                        </Col>
                    <Col sm={10}>
                        <FormControl
                            type="text"
                            placeholder="Enter a title for your Quiz"
                            onChange={this.onTitleChange}
                            required
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Difficulty
                        </Col>
                    <Col sm={10}>
                        <FormControl componentClass="select" onChange={this.onDifficultyChange}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </FormControl>
                    </Col>
                </FormGroup>
                <div className="quiz-start-btn-container">
                    <Button type="submit" className="quiz-start-btn">Start adding questions</Button>
                </div>
            </Form>
        );
    }
}


export default StartQuizForm;