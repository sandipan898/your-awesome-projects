const express = require("express");
const cors = require("cors");
const db = require("./models");

const todoRouter = require("./routes/todo");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRouter);

db.sequalize
  // .sync({ force: true })
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
