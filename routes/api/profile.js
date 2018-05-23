const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load models
const profile = require("../../models/Profile");
const users = require("../../models/Users");

// @route    GET api/profile/test
// @Desc     Tests profile route
// @access   Private
router.get("/test", (req, res) => res.json({
  msg: "Profile Works!"
}));

// @route    GET api/profile
// @Desc     Get current users profile
// @access   Private
router.get("/", passport.authenticate("jwt", {session: false}), (req, res) => {
  const errors = {};
  Profile.findOne({user: req.user.id})
    .then(profile => {
      if(!profile) {
        errors.profile = "Their is no profile for this user";
        return(res.status(404).json(errors))
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;