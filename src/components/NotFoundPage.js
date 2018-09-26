import React from "react";
import {Grid} from "react-bootstrap";
import {Link } from "react-router-dom";

const NotFoundFoundPage = () => (
    <Grid>
        <h1>Sorry, this page does not exist!</h1>
        <Link to="/">Go back to homepage</Link>
    </Grid>
);

export default NotFoundFoundPage;