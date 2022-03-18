const router = require("express").Router();
const Cite = require("../schemas/Cite");

router.post("/cite", async (req, res) => {
  const { username, date, description, cite } = req.body;
  !req.body && res.status(404).json({ message: "Failed data", status: false });

  try {
    const newCite = new Cite({
      username,
      date,
      description,
      cite,
    });
    newCite.save();
    res.status(200).json({ message: "Data saved successfully", data: newCite });
  } catch (error) {
    res.status(500).json({ message: "Dont saved cite" });
  }
});

module.exports = router;
