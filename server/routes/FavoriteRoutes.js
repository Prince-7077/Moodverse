import express from "express";
import Favorite from "../models/favorite.js";

const router = express.Router();

// Add Favorite

router.post("/", async (req, res) => {
  try {
    const { user, title, type, mood, artist,description,image,link} = req.body;

       const exists = await Favorite.findOne({
      user,
      title,
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Already in favorites",
      });
    }
    const favorite = await Favorite.create({
      user,
      title,
      type,
      mood,
      artist,
      description,
        image,
        link,
    });

    res.status(201).json({
      success: true,
      favorite,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});


// Get User Favorites
router.get("/:userId", async (req, res) => {
  try {
    const favorites = await Favorite.find({
      user: req.params.userId,
    });

    res.status(200).json({
      success: true,
      favorites,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// Delete Favorite

router.delete("/:userId/:title", async (req, res) => {
  try {
    const { userId, title } = req.params;

    const deletedFavorite = await Favorite.findOneAndDelete({
      user: userId,
      title: decodeURIComponent(title),
    });

    if (!deletedFavorite) {
      return res.status(404).json({
        success: false,
        message: "Favorite not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Favorite removed successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;