const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://admin:password321@cluster0.0hajq.mongodb.net/formDB",
    {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    }
)

//require router
app.use("/", require("./routes/formRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})