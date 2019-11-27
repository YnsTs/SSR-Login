import React, { Component } from "react";
import Cookies from "js-cookie";
import {
    modalClose,
    setHeaderToken,
    removeHeaderToken,
    formValidate
} from "./Helper";
import axios from "axios";
// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore
const LoginContext = React.createContext();

class LoginProvider extends Component {
    //state = { isAuth: false };
    constructor() {
        super();
        this.state = {
            isToken: Cookies.get("auth_token"),
            isRedirect: false
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    getData(isToken) {
        this.setState({ isToken: isToken });
    }

    login(getToken, { email, password }) {
        if (event) event.preventDefault();

        let apiBaseUrl = "http://localhost:3008/api/v1/user/login";
        const payload = { email: email, password: password };
        formValidate();
        const _this = this;
        axios
            .post(apiBaseUrl, payload)
            .then(function(response) {
                /* response.data'sı auth-token'nin değeri geliyor yani üretilen access-token */
                if (response.status == 200) {
                    console.log("Logged in");
                    setHeaderToken(response.data);
                    _this.getData(response.data);
                    _this.state.isRedirect = false;
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
    }

    logout() {
        removeHeaderToken();
        this.setState({ isToken: "" });
        fetch("http://localhost:3008/api/v1/user/logout", {
            method: "get",
            mode: "cors",
            credentials: "include", // <--- YOU NEED THIS LINE
            redirect: "follow"
        })
            .then((res) => {
                this.setState({ isRedirect: true });
                window.location.replace("http://localhost:3008/");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <LoginContext.Provider
                value={{
                    isToken: this.state.isToken,
                    isRedirect: this.state.isRedirect,
                    login: this.login,
                    logout: this.logout
                }}
            >
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}

const LoginConsumer = LoginContext.Consumer;
export { LoginProvider, LoginConsumer };
