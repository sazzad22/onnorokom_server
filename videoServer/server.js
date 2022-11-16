const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

//Server
const port = process.env.PORT || 5000;

//database connection
mongoose
    .connect(process.env.DB_URI, {
        dbName: 'VideoDatabase',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db Connected");
  });

  app.listen(port, () => {
    console.log(`Onnorokom is running on port ${port}`);
  })
