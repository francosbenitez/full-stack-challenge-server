const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = require("./src/models/index.jsx");

//db.sequelize.sync({ force: false });
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

const getRoutes = require("./src/routes/index.jsx");

getRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});