"use strict"
const express = require('express');
let router = express.Router();

const EmailController = require('../controllers/microsoft/EmailController');


router.use(function (req, res, next) {
    console.log("microsoft"+req.url);
    next();
})

router
    .route("/")
    .get((req, res) => {
        res.json({error : "GET not found"});
    })
    .post(async (req, res) => {
        let {user_id, client_id, client_secret, tenant_id, mailto, subject, html} = req.body;
        EmailController.sendEmail(user_id, client_id, client_secret, tenant_id, mailto, subject, html).then(result => {
            //console.log(result)
            res.json(result);
        })
    })

module.exports = router;
