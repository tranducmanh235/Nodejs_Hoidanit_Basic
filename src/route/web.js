import express from "express";
import homeController from "../controller/homeControlle";

let router = express.Router();

const initWebRoute = (app) => {
    // app.METHOD(PATH, HANDLER);

    router.get("/", homeController.getHomepage);

    router.get("/about", (req, res) => {
        res.send("I'm Tranducmanhx4!");
    });

    // prefix befor router
    return app.use("/", router);
};

module.exports = initWebRoute;
