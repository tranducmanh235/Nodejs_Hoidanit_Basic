import express from "express";
import APIController from "../controller/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
    router.get("/users", APIController.getAllUsers); // method GET -> read
    router.post("/create-user", APIController.createNewUser); // method POST -> create
    router.put("/update-user/", APIController.updateUser); // method PUT -> update
    router.delete("/delete-user/:id", APIController.deleteUser); // method DELETE -> delete

    return app.use("/api/v1/", router);
};

export default initAPIRoute;
