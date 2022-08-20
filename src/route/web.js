import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
    // app.METHOD(PATH, HANDLER);

    router.get("/", homeController.getHomepage);
    router.get("/detail/user/:userId", homeController.getDetailPage);

    router.post("/create-new-user", homeController.createNewUser);
    router.post("/delete-user", homeController.deleteUser);
    router.get("/edit-user/:id", homeController.getEditPage);
    router.post("/update-user", homeController.updateUser);

    router.get("/about", (req, res) => {
        res.send("I'm Tranducmanhx4!");
    });

    // prefix before router
    return app.use("/", router);
};

module.exports = initWebRoute;
