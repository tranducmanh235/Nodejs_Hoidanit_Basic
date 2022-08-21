import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
// import connection from "./config/connectDB";
import initAPIRoute from "./route/api";

require("dotenv").config();
var morgan = require("morgan");

const app = express();
const port = process.env.PORT || 8080;

// middleware: req hop le --> next chay tiep
app.use((req, res, next) => {
    console.log(">>> run into middleware");
    console.log(req.method);
    next();
});

app.use(morgan("combined"));

// middleware - highest level ======> convert data to json type
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

// init api route
initAPIRoute(app);

// handle 404 not found
app.use((req, res) => {
    return res.render("404.ejs");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
