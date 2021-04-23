const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

const { auth } = require("../middleware/auth");
// const { signedCookie } = require('cookie-parser');


router.post("/favoriteNumber", auth, (req, res) => {
    Favorite.find({ 'movieId': req.body.movieId })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err)
            res.json({success: true, favoriteNumber:favorite.length})
    })
});

router.post("/favorited", auth, (req, res) => {
    Favorite.find({ 'movieId': req.body.movieId, 'userFrom': req.body.userFrom })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err)
            
            let result = false;
            //true when I already added a movie as my favorite
            if (favorite.length !== 0) {
                result = true;
            }
            res.json({success: true, favorited: result})
    })
});

router.post("/removeFromFavorite", auth, (req, res) => {
    Favorite.findByIdAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err })
            res.json({success: true, doc})
    })
});

router.post("/addToFavorite", auth, (req, res) => {
    //saving data to favorite collection
    const favorite = new Favorite(req.body);
    favorite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        
        return res.json({success:true})
    })
});

module.exports = router;