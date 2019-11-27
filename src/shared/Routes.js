import React, { Component, Fragment } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Dashboard from "./Admin/Dashboard";
import Profile from "./Admin/Profile";
import NoMatch from "./Pages/NoMatch";

const Routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        exact: true,
        component: About
    },
    {
        path: "/contact",
        exact: true,
        component: Contact
    },
    {
        path: "/dashboard",
        exact: true,
        component: Dashboard
    },
    {
        path: "/dashboard/profile",
        exact: true,
        component: Profile
    },
    {
        path: "*",
        component: NoMatch
    }
];

export default Routes;
