import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { LoginConsumer } from "../Login/LoginContext";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const localState = JSON.parse(localStorage.getItem("infoToken"));
        return (
            <Fragment>
                <LoginConsumer>
                    {({ isToken }) =>
                        isToken ? (
                            <div className="content">
                                <div className="sidebar">
                                    <Link to="/dashboard">Dashboard</Link>
                                    <Link to="/dashboard/profile">Profile</Link>
                                    <Link to="/dashboard/advertisement">
                                        Advertisement
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="content">
                                <p>Giriş yapmanız gerekiyor.</p>
                            </div>
                        )
                    }
                </LoginConsumer>
            </Fragment>
        );
    }
}

export default Dashboard;
