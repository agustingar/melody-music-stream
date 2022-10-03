const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const userRouter = express.Router();

userRouter.post("/register", userController.postUser);
userRouter.get("/login", userController.login);
userRouter.get("/users", [authMiddleware.secureRoute], userController.getUser);

module.exports = userRouter;
