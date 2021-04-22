const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

const { auth } = require("../middleware/auth");
const { signedCookie } = require('cookie-parser');


router.post("/favoriteNumber", auth, (req, res) => {
    Favorite.find({ 'movieId': req.body.movieId })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err)
            res.json({success: true, FavoriteNumber:favorite.length})
    })
});

module.exports = router;