const mongoose = require("mongoose");

const formSchema = {
    name: String,
    contact: String,
    address: String,
    email: String
}

const Form = mongoose.model("Form", formSchema);

module.exports = Form;