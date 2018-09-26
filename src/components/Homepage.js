import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Button} from "react-bootstrap";

const Homepage = () => (
    <div className="homepage">
        <h1 className="homepage__title">Welcome to Everyone can QUIZ!</h1>
        <p className="homepage__text">Do you love quizzes? Then this app is for you! You can take quizzes made by other people, but you can also create 
        your own and share them with your friends! To start making quizzes all you have to do is login with your Google account 
        and go to your personal page! And if you're here to just play, no need to login! So, Let the fun begin!</p>
        <div>
        <LinkContainer to="/select">
            <Button bsStyle="primary">Take a quiz</Button>
        </LinkContainer>
        </div>
    </div>
);

export default Homepage;

