"use strict"
const express = require('express');
let router = express.Router();

const EmailController = require('../controllers/sendgrid/EmailController');

router.use(function (req, res, next) {
    console.log("sendgrid"+req.url);
    next();
})

router
    .route("/")
    .get((req, res) => {
        res.json({error : "GET not found"});
    })
    .post(async (req, res) => {
        let {from, mailto, subject, html, api_key, text} = req.body;
        EmailController.sendEmail(mailto, from, subject, html, text, api_key).then(result => {
            res.json(result);
        })
    })

module.exports = router;
