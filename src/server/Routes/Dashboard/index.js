import express from "express";
import verify from "../../Verify/verifyToken";

const router = express.Router();

router.get("/", verify, (req, res) => {
    res.send(req.user);
});

router.get("/profile", verify, (req, res) => {
    res.send(req.user);
});

router.get("/advertisement", verify, (req, res) => {
    res.send(req.user);
});

module.exports = router;
