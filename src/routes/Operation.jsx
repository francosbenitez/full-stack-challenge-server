const express = require("express");
const isAuth = require("../middlewares/Auth.jsx");

const Operation = require("../controllers/Operation.jsx");

const routes = express.Router();

routes.post("/createOperation/:userId", isAuth.checkToken, Operation.create);
routes.put('/update/:operationId/:userId', isAuth.checkToken, Operation.update);
routes.delete('/delete/:operationId/:userId', isAuth.checkToken, Operation.delete);
routes.get("/getOperations/:userId",  isAuth.checkToken, Operation.getOperations);

module.exports = routes;