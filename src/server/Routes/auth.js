import express from "express";
import User from "../../model/User";
import { registerValidation, loginValidation } from "../Validation/validation";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/register", async (req, res) => {
    // Lets validate the data before we a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exist");

    // Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
        //res.redirect("/dashboard");
    } catch (error) {
        res.status(400).send(error);
    }
});

//LOGIN

router.post("/login", async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the email exist
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email is not found");

    //Password is correct

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");

    //Create and assign a token

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "2h"
    });

    res.cookie("auth_token", token, {
        maxAge: 86400,
        httpOnly: false,
        secure: false
    });
    res.send(token);

    /*res.header("auth-token", token).send(token);*/
});

router.get("/logout", (req, res, next) => {
    res.clearCookie("auth_token");
    res.status(301).redirect("http://" + req.headers.host);
});

module.exports = router;
