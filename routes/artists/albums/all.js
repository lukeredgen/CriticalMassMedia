/**
 * Created by luke on 22/3/17.
 */
const data = require('../../../data.json');

module.exports = (req, res) => {
    const artistId = data.artists.find(b => b.name == req.params.artistId).id;
    console.log(artistId);
    const albums = data.albums.filter(a => a.artistId === artistId);
    res.status(200).json({ albums });
};