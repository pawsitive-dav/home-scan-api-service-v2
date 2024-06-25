const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/config");
const swaggerSetup = require("./config/swagger");
require("dotenv").config();

const inspectionLocation = require("./routes/inspectionLocationRoutes");
const inspectionSystem = require("./routes/inspectionSystemRoutes");
const inspectionStorage = require("./routes/inspectionStorageRoutes");
const memberInfo = require("./routes/memberInfoRoutes");
const reportList = require("./routes/reportListRoutes");

const app = express();
const prot = process.env.PORT || 3000;
const baseUri = process.env.BASE_URI;

app.use(cors());

app.use(bodyParser.json());
app.use("/api/v2", inspectionLocation);
app.use("/api/v2", inspectionSystem);
app.use("/api/v2", inspectionStorage);
app.use("/api/v2", memberInfo);
app.use("/api/v2", reportList);

swaggerSetup(app);

sequelize
  .sync()
  .then(() => {
    app.listen(prot, () => {
      console.log(`Swagger docs available at ${baseUri}:${prot}/api-docs`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
