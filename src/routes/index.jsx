const operationRoute = require("./Operation.jsx");
const userRoute = require("./User.jsx");

module.exports = (app) => {
  app.use("/user", userRoute);
  app.use("/operation", operationRoute);
};
