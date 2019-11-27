import React, { Component, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginConsumer } from "../../Login/LoginContext";
import logo from "../../../assets/images/diva.png";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <section id="headerCt">
                    <Link to="/" className="logo">
                        <figure className="logo-figure">
                            <img src={logo} alt="" />
                        </figure>
                    </Link>
                    <div className="menu-container">
                        <nav className="menu animated menu1">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <span className="burger-menu burger-01">
                        <i className="one">YT</i>
                        <i className="two">YT</i>
                        <i className="three">YT</i>
                    </span>
                    <div className="sociallink-nav-container">
                        <ul className="sociallink-nav">
                            <li className="fb">
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className="tw">
                                <a href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="gp">
                                <a href="#">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li className="ld">
                                <a href="#">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="pn">
                                <a href="#">
                                    <i className="fa fa-pinterest"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="user-container">
                        <LoginConsumer>
                            {({ isToken, logout }) =>
                                isToken ? (
                                    <div>
                                        <ul>
                                            <li>
                                                <Link to="/dashboard">
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/profile">
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-login"
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                    >
                                        Login
                                    </button>
                                )
                            }
                        </LoginConsumer>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Header;
