const express = require("express");
const knex = require("knex");
const bookmarkRoutes = require("./routes/bookmarks");
const BodyParser = require("body-parser");
const hbs = require("express-handlebars");

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.engine("hbs", hbs({ extname: "hbs" }));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

require("dotenv").config({});

app.use("/bookmark", bookmarkRoutes);

app.get("/", (req, res) => {
  console.log("Connected to React");
  res.send("Hello Page");
  //   res.redirect("/");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is listening on PORT 3005`);
});
