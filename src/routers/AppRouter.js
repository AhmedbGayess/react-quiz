import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Homepage from "../components/Homepage";
import QuizPage from "../components/QuizPage";
import DashboardPage from "../components/DasboardPage";
import CreateQuizPage from "../components/CreateQuizPage";
import NotFoundFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import LeaderboardPage from "../components/LeaderboardPage";
import NavigationBar from "../components/NavigationBar";
import SelectQuizPage from "../components/SelectQuizPage";
import { Grid } from "react-bootstrap";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <NavigationBar />
            <Grid>
                <Switch>
                    <Route path="/" component={Homepage} exact={true} />
                    <Route path="/select" component={SelectQuizPage} />
                    <Route path="/quiz/:id" component={QuizPage} />
                    <PrivateRoute path="/dashboard" component={DashboardPage} />
                    <PrivateRoute path="/create" component={CreateQuizPage} />
                    <Route path="/leaderboard" component={LeaderboardPage} />
                    <Route component={NotFoundFoundPage} />
                </Switch>
            </Grid>
        </div>
    </Router>
);

export default AppRouter;