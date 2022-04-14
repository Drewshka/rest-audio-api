const express = require("express"),
  app = express(),
  PORT = 8080,
  cors = require("cors"),
  audioRoutes = require("./routes/audioRoutes");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
// const { fileURLToPath } = require("url");

app.use(cors());
// app.use(express.json());
app.use(express.json({ type: "application/json" }));
app.use(morgan("dev"));
app.use(helmet({ contentSecurityPolicy: false }));

require("dotenv").config();

let options = {
  dotfiles: "ignore",
  extensions: ["mp3"],
};

//* serve the static pages
app.use("/songs", express.static(__dirname + "/public/songs"));
// app.use(express.static(path.join(__dirname, "public/songs"), options));
// app.use(express.static("public/songs"), options);
// app.use(express.static("audioFiles"));
// app.use("/audioFiles", express.static(path.join(__dirname, "audioFiles")));
// app.use(express.static(path.join(__dirname, "audioFiles")));
// app.use(express.static(path.join(__dirname, "..client/src")));

app.use("/api/audio", audioRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ Error: err.message });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
