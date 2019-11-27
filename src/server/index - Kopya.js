import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import express from "express";
import { Helmet } from "react-helmet";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import { minifyData, renderFullPage } from "./helper";
import App from "../shared/App";
import routes from "../shared/Routes";
dotenv.config();
const mongoose = require("mongoose");
import jwt from "jsonwebtoken";
const app = express();
const router = express.Router();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to DB!");
    }
);

app.use(express.json());
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser());
app.use(compression());
app.use(
    cors({
        origin: "http://localhost:3008",
        credentials: true
    })
);
app.use(express.static("public"));

//Import Routes
const csrfProtection = csrf({ cookie: true });
const authRoute = require("./Routes/auth");
const dashboardRoute = require("./Routes/Dashboard/index");

app.use("/api/v1/user", authRoute);
app.use("/dashboard", dashboardRoute);

app.get("*", csrfProtection, (req, res, next) => {
    /*
    console.log("Cookies: ", req.cookies);
    console.log("auth-token: ", req.signedCookies);
    console.log("auth-token: ", req.signedCookies.user);
    */

    const promises = routes.reduce((acc, route) => {
        acc.push(Promise.resolve());
        return acc;
    }, []);
    Promise.all(promises)
        .then((initialDataPage) => {
            const context = { initialDataPage };
            const html = renderToString(
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            );
            console.log(html);
            const htmlMinify = minifyData(html);
            const helmet = Helmet.renderStatic();
            let initialState;

            if (context.status === 404) {
                res.status(404);
            }
            /*
			const cookie = req.cookies.auth_token;
			console.log(cookie);
			*/
            /*
			try{
				const decoded = jwt.verify(cookie, process.env.TOKEN_SECRET)
			} catch(err){
				res.status(400);
				throw err
			}
			*/
            /*
			if (cookie !== undefined)
			{	
				//res.cookie("auth-token", 'value', { signed: true })
				console.log(cookie);
			}
			*/

            /*
			const cookie = req.cookies.cookieName;
			if (cookie === undefined)
			{
				let options = {
					maxAge: 1000 * 60 * 15, // would expire after 15 minutes
					httpOnly: true, // The cookie only accessible by the web server
					signed: true // Indicates if the cookie should be signed
				}
				res.cookie('cookieName', 'cookieValue', options) // options is optional
				console.log('cookie created successfully');
			} else {
				console.log('cookie exists', cookie);
			}
			*/

            res.send(
                renderFullPage({
                    html: htmlMinify,
                    helmet: helmet,
                    initialState: initialState
                })
            );
        })
        .catch(next);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running port:${process.env.PORT}`);
});
