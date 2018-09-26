import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByTitle } from "../actions/quizzesFilters";
import { Form, FormGroup, FormControl } from "react-bootstrap";

class QuizzesListFilter extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortByChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate();
        } else if (e.target.value === "title") {
            this.props.sortByTitle();
        }
    }
    render() {
        return (
            <Form inline>
                <FormGroup bsSize="large">
                    <FormControl type="text" placeholder="Search Quiz" onChange={this.onTextChange} />
                    <FormControl
                        componentClass="select"
                        placeholder="Sort Quizzes"
                        onChange={this.onSortByChange}
                    >
                        <option value="date">Date</option>
                        <option value="title">Title</option>
                    </FormControl>
                </FormGroup>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    quizzesFilters: state.quizzesFilters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (title) => dispatch(setTextFilter(title)),
    sortByDate: () => dispatch(sortByDate()),
    sortByTitle: () => dispatch(sortByTitle())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizzesListFilter);