const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

// Database
mongoose.connect(process.env.DB_connect,{useNewUrlParser : true})
    .then(() => {
        console.log("Conncted to database.........")
    }).catch((err) => {
        console.log(err)
    });

// Middieware
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// controllers
const UserControl = require("./controllers/UserControl");

// Routes
app.post("/api/user/create", UserControl.create);
app.put("/api/user/update", UserControl.update);
app.get("/api/user/get", UserControl.get);
app.get("/api/user/getID", UserControl.getID)
app.delete("/api/user/delete", UserControl.delete);

// start server
app.listen(3000, () => {
    console.log("server has started on port 3000....")
});
