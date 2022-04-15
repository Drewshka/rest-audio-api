const express = require("express"),
  app = express(),
  PORT = 8080,
  cors = require("cors"),
  audioRoutes = require("./routes/audioRoutes");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

app.use(cors());
app.use(express.json({ type: "application/json" }));
app.use(morgan("dev"));
app.use(helmet({ contentSecurityPolicy: false }));

require("dotenv").config();

let options = {
  extensions: ["mp3", "wav"],
};

//* serve the static pages
app.use(express.static(path.join(__dirname, "audioFiles"), options));

app.use("/api/audio", audioRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ Error: err.message });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
