import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    type: String,

    mood: String,

    artist: String,

    description: String,

    image: String,

    link: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Favorite", favoriteSchema);