import React from "react";
import QuizzesListItem from "./QuizzesListItem";

class QuizzesList extends React.Component {
    render() {
        return (
            <div className="panel-container">
                {
                    this.props.quizzes.map((quiz) => <QuizzesListItem key={quiz.id} {...quiz}/>)
                }
            </div>
        )
    }
}
export default QuizzesList;