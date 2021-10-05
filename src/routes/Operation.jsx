const express = require("express");
//const isAuth = require("../middlewares/Auth.jsx");

const Operation = require("../controllers/Operation.jsx");

const routes = express.Router();

routes.post("/createOperation", Operation.create);
routes.put('/update/:operationId', Operation.update);
routes.delete('/delete/:operationId', Operation.delete);
routes.get("/getOperations",  Operation.getOperations);

module.exports = routes;