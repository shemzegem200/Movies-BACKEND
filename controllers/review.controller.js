const Review = require("../models/review.model.js");



const getReviews = async(req, res) => {
    try {
        let id = req.params.id || {}
        const reviews = await Review.find({ movieId: parseInt(id) });
        if (!reviews) {
          res.status(404).json({ error: "Not found" });
          return;
        }
        res.status(200).json(reviews);
      } catch (e) {
        console.log(`api, ${e}`);
        res.status(500).json({ error: e });
      }
}


const postReview = async(req, res) => {
    try {
        const movieId = parseInt(req.body.movieId);
        const review = req.body.review;
        const user = req.body.user;

        const reviewDoc = {
            movieId: movieId,
            user: user,
            review: review,
        }
        const reviewResponse = await Review.create(reviewDoc);
        res.json({ status: "success" });
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
}

const getReview = async(req, res) => {
    try {
        let id = req.params.id || {}
        let review = await Review.findById(id)
        if (!review) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json(review)
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
}

const updateReview = async(req, res) => {
    try {
        const reviewId = req.params.id;
        const review = req.body.review;
        const user = req.body.user;
        const reviewResponse = await Review.findByIdAndUpdate(
            reviewId,
            { $set: { user: user, review: review } }
          );
  
        var { error } = reviewResponse;
        if (error) {
          res.status(400).json({ error });
        }
  
        if (reviewResponse.modifiedCount === 0) {
          throw new Error(
            "unable to update review",
          );
        }
  
        res.json({ status: "success" });
      } catch (e) {
        console.log("in here, update review: issue");
        res.status(500).json({ error: e.message });
      }
}


const deleteReview = async(req, res) => {
    try {
        const reviewId = req.params.id;
        const deleteResponse = await Review.findByIdAndDelete(reviewId);
        res.json({ status: "success" });
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
}



module.exports = {getReviews, postReview, getReview, updateReview, deleteReview}