const express = require("express"),
  router = express.Router(),
  {
    listAudio,
    getAudioFile,
    editAudioFile,
  } = require("../controllers/audioControllers.js");

router.get("/", listAudio);
router.get("/:id", getAudioFile);
router.put("/:id", editAudioFile);

module.exports = router;
