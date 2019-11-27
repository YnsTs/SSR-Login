import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Pages/Partials/Header";
import { LoginProvider } from "./Login/LoginContext";
import LoginModal from "./Login/LoginModal";
import { LoginConsumer } from "./Login/LoginContext";
import "../assets/css/main.scss";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <LoginProvider>
                    <Header />

                    <section id="contentCt" className="content">
                        <Switch>
                            {Routes.map(
                                ({
                                    path,
                                    exact,
                                    component: Component,
                                    ...rest
                                }) => (
                                    <Route
                                        key={path}
                                        path={path}
                                        exact={exact}
                                        render={(props) => (
                                            <Component {...props} {...rest} />
                                        )}
                                    />
                                )
                            )}
                            <Route render={(props) => <NoMatch {...props} />} />
                        </Switch>
                    </section>
                    <LoginModal />
                </LoginProvider>
            </Fragment>
        );
    }
}

export default App;
