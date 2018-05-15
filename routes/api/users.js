const express = require("express");
const router = express.Router();

// @route    GET api/users/test
// @Desc     Tests users route
// @access   Public
router.get("/", (req, res) => res.json({
  msg: "Users Works!"
}));

module.exports = router;