const express = require("express"),
  router = express.Router(),
  {
    listAudio,
    getAudioFile,
    editAudioFile,
    // postAudio,
    // deleteAudioFile,
  } = require("../controllers/audioControllers.js");

router.get("/", listAudio);
router.get("/:id", getAudioFile);
router.put("/:id", editAudioFile);
// router.post("/", postAudio);
// router.delete("/:id", deleteAudioFile);

module.exports = router;
