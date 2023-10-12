const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 8000;
const CLOUD_URL = process.env.CLOUD_ADDRESS ||
  "https://cloud.netsblox.org";
const EDITOR_URL = process.env.EDITOR_ADDRESS ||
  "https://editor.netsblox.org";
const REDIRECT_URL = process.env.REDIRECT_URL || EDITOR_URL;

let app = express();
app.use(express.static(path.join(__dirname, "public")));
app.engine("pug", require("pug").__express);
app.set("views", path.join(__dirname, "views"));

console.log("default cloud:", CLOUD_URL);
console.log("default redirect URL:", REDIRECT_URL);
const urls = {
  CLOUD_URL,
  REDIRECT_URL,
  EDITOR_URL,
};
app.get(
  "/",
  (_req, res) => res.render("index.pug", urls),
);
app.get(
  "/index.html",
  (_req, res) => res.render("index.pug", urls),
);
app.get(
  "/register.html",
  (_req, res) => res.render("register.pug", urls),
);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${PORT}`);
});
