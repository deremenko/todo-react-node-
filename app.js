const express = require("express");
const cors = require("cors");
const { PORT, DB_CONNECTION } = require("./config.js");
const apiRoutes = require("./src/routes/task.js");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);

const loadApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => {
      console.log("Example app listening on port 8000");
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

loadApp();