const express = require("express");
const isAuth = require("../middlewares/Auth.jsx");

const Operation = require("../controllers/Operation.jsx");

const routes = express.Router();

routes.post("/createOperation", isAuth.checkToken, Operation.create);
routes.put('/update/:operationId', isAuth.checkToken, Operation.update);
routes.delete('/delete/:operationId', isAuth.checkToken, Operation.delete);
routes.get("/getOperations",  isAuth.checkToken, Operation.getOperations);

module.exports = routes;