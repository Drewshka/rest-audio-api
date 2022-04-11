const express = require("express"),
  app = express(),
  PORT = 8080,
  cors = require("cors"),
  audioRoutes = require("./routes/audioRoutes");

app.use(cors());
app.use(express.json());

require("dotenv").config();

app.use("/api/audio", audioRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ Error: err.message });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
