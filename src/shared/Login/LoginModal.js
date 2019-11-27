import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { LoginConsumer } from "./LoginContext";
import axios from "axios";

const LoginModal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.title = `You clicked ${email} ${password}times`;
    });

    const modalClose = () => {
        const btnClose = document.getElementsByClassName("btn-secondary");
        $("#exampleModalCenter").modal("hide");
    };

    const loginSubmit = (event) => {
        if (event) event.preventDefault();

        let apiBaseUrl = "http://localhost:3008/api/v1/user/login";
        const payload = { email: email, password: password };
        formValidate();
        axios
            .post(apiBaseUrl, payload)
            .then(function(response) {
               
                if (response.status == 200) {
                    console.log("Logged in");
                    setHeaderToken(response.data);
                    modalClose();
                } else if (response.status == 400) {
                    console.log("Username password do not match");
                    alert("username password do not match");
                } else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function(error) {
                console.log(error);
            });

        return false;
    };

    return (
        <Fragment>
            <LoginConsumer>
                {({ login }) => (
                    <div
                        className="modal fade"
                        id="exampleModalCenter"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                    >
                        <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                        >
                            <div className="modal-content">
                                <form className="login-form" noValidate>
                                    <input
                                        type="hidden"
                                        name="_csrf"
                                        value="{{csrfToken}}"
                                    />
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalCenterTitle"
                                        >
                                            Login Form
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter email"
                                                value={email}
                                                required
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                            <small
                                                id="emailHelp"
                                                className="form-text text-muted"
                                            >
                                                We'll never share your email
                                                with anyone else.
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="Password"
                                                value={password}
                                                required
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="form-group form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="exampleCheck1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="exampleCheck1"
                                            >
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={(e) =>
                                                login(e.target.event, {
                                                    email,
                                                    password
                                                })
                                            }
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
					
					
                )}
            </LoginConsumer>
        </Fragment>
    );
};

export default LoginModal;
