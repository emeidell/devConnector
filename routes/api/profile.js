const express = require("express");
const router = express.Router();

// @route    GET api/profile/test
// @Desc     Tests profile route
// @access   Private
router.get("/", (req, res) => res.json({
  msg: "Profile Works!"
}));

module.exports = router;