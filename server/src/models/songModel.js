const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const SongSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title song"],
      trim: true,
      minLength: [2, "Song title needs to have at least 2 characters"],
      maxLength: [80, "Song title cannot exceed 80 characters"],
    },
    artist: {
      type: String,
      required: [true, "Please enter artist song"],
      trim: true,
      minLength: [2, "Song artist needs to have at least 2 characters"],
      maxLength: [50, "Song artist cannot exceed 30 characters"],
    },
    genre: {
      type: String,
      required: [true, "Please select genre for this song"],
      enum: {
        values: [
          "Country",
          "Electronic dance music (EDM)",
          "Hip-hop",
          "Indie rock",
          "Jazz",
          "K-pop",
          "Metal",
          "Oldies",
          "Pop",
          "Rap",
          "Rhythm & blues (R&B)",
          "Rock",
          "Techno",
          "Folk",
          "Ska",
          "Reggae",
          "Punk",
        ],
        message: "Please select correct genre for song",
      },
    },
    duration: {
      type: Number,
      default: 0,
    },
    url: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      minLength: [2, "Album name needs to have at least 2 characters"],
      maxLength: [50, "Album name artist cannot exceed 30 characters"],
    },
    private: {
      type: Boolean,
      required: true,
    },
    songImage: {
      type: String,
      default:
        "https://res.cloudinary.com/oasismusic/image/upload/v1634289407/wmscaabwab6zggp4xilj.png",
    },
    owner: {
      type: String,
      ref: "User",
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },
    played: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", SongSchema);
module.exports = {
  Song,
};
