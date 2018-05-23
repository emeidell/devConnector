const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String,
    required: false
  },
  github: {
    type: String,
    required: false
  },
  expirience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: false
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date,
        required: false
      },
      current: {
        type: Boolean,
        default: false,
        required: false
      },
      description: {
        type: String,
        required: false
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldOfStudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date,
        required: false
      },
      current: {
        type: Boolean,
        default: false,
        required: false
      },
      description: {
        type: String,
        required: false
      }
    }
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    linkedIn: {
      type: String,
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);