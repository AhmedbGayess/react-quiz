import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin, startLogout } from "../actions/auth";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class NavigationBar extends React.Component {
    onAuthentication = () => {
        if (this.props.isAuthenticated) {
            this.props.startLogout();
        } else {
            this.props.startLogin();
        }
    }
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Everyone Can QUIZ!</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to="/select">
                            <NavItem>Take a Quiz</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/leaderboard">
                            <NavItem>Leaderboard</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/dashboard">
                            <NavItem disabled={!this.props.isAuthenticated}>My Page</NavItem>
                        </LinkContainer>
                        <NavItem onClick={this.onAuthentication}>{this.props.isAuthenticated ? "Logout" : "Login"}</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

const mapDispatchToProps = (dispatch) => ({
    startLogin: dispatch(startLogin),
    startLogout: dispatch(startLogout)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
