const express = require("express");
const router = express.Router();
const Form = require("../models/formModel");


router.route("/data").post((req, res) => {
    const name = req.body.name;
    const contact = req.body.contact;
    const address = req.body.address;
    const email = req.body.email;
    const newForm = new Form({
        name,
        contact,
        address,
        email
    });

    newForm.save();
})

module.exports = router;