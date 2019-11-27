import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

const Status = ({ code, children }) => (
    <Route
        render={({ staticContext }) => {
            if (staticContext) staticContext.status = code;
            return children;
        }}
    />
);

class NoMatch extends Component {
    render() {
        return (
            <Fragment>
                <Status code={404}>
                    <div className="container">
                        <div className="content">
                            <h1>Sorry, 404 Not Found</h1>
                        </div>
                    </div>
                </Status>
            </Fragment>
        );
    }
}

export default NoMatch;
