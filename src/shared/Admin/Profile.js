import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="content">
                    <div className="sidebar">
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/dashboard/profile">Profile</Link>
                        <Link to="/dashboard/advertisement">Advertisement</Link>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Profile;
