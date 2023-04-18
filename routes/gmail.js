"use strict"
const express = require('express');
let router = express.Router();

const GmailController = require('../controllers/gmail/GmailController');


router.use(function (req, res, next) {
    console.log("gmail"+req.url);
    next();
})

router
    .route("/")
    .get((req, res) => {
        res.json({error : "GET not found"});
    })
    .post(async (req, res) => {
        let {from, mailto, subject, text, html, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN} = req.body;
        GmailController.sendGmail(from, mailto, subject, text, html, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN).then(result => {
            res.json(result);
        })
    })

module.exports = router;
