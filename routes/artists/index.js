/**
 * Created by luke on 22/3/17.
 */
const findObject = require('../../utils/findObject');
const artists = require('express').Router();
const all = require('./all');
const single = require('./single');
const albums = require('./albums');

artists.param('artistId', findObject('artist'));

artists.use('/:artistId/albums', albums);
artists.get('/', all);
artists.get('/:artistId', single);

module.exports = artists;