const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema(
  {
    movieId: {
      type: Number,
      required: true,
    },

    user: {
      type: String,
      required: true,
    },

    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;