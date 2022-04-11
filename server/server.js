// const express = require("express");

// const PORT = process.env.PORT || 3001;
// app.use(cors());
// const app = express();

const express = require("express"),
  app = express(),
  PORT = 8080,
  cors = require("cors"),
  audioRoutes = require("./routes/audioRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/audio", audioRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ Error: err.message });
});

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello World!" });
// });

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
