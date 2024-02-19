const express = require("express");
const router = express.Router();
const wishlistController = require("../../controllers/wishlists/wishlists.controller");

// POST method to create a new wishlist for a user
router.post("/", wishlistController.createWishlist);
// POST method to add an item to a user's wishlist
router.post("/add", wishlistController.addWishlistItem);
// GET method for all wishlists
router.get("/", wishlistController.getWishlists);
// GET method for a user's wishlist
router.get("/:userId", wishlistController.getWishlist);
// POST method to delete one item from a user's wishlist
router.post("/delete", wishlistController.deleteWishlistItem);

module.exports = router;
