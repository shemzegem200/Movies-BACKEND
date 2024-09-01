const express = require("express");
const {getReviews, postReview, getReview, updateReview, deleteReview} = require("../controllers/review.controller.js");

const router = express.Router();

router.get("/movie/:id", getReviews);
router.post("/new", postReview);
router.get("/:id", getReview)
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);


module.exports = router;