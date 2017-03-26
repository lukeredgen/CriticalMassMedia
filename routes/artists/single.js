/**
 * Created by luke on 22/3/17.
 */
const data = require('../../data.json');

module.exports = (req, res) => {
    const artist = req.artist;
    res.status(200).json({ artist });
};