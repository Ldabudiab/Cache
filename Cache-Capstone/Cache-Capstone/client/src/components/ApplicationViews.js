import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";



const ApplicationViews = ({ isLoggedIn }) => {
    return (
        <Switch>

            <Route path="/" exact>
                
                {isLoggedIn ? <VideoList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/videoform">
                <VideoForm />
            </Route>
            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>
        </Switch>
    );
};

export default ApplicationViews;