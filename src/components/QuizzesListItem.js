import React from "react";
import { Panel, Button } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const QuizzesListItem = ({ id, title, difficulty, createdAt }) => (
    <Panel>
        <Panel.Heading>
            <Panel.Title toggle>
                <p className="panel-title">{title}</p>
            </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
            <Panel.Body>
                <p>{difficulty}</p>
                <p>{createdAt}</p>
                <LinkContainer to={`/quiz/${id}`}>
                    <Button>Start Quiz</Button>
                </LinkContainer>
            </Panel.Body>
        </Panel.Collapse>
    </Panel>
);

export default QuizzesListItem;