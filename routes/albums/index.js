/**
 * Created by luke on 22/3/17.
 */
const findObject = require('../../utils/findObject');
const albums = require('express').Router();
const all = require('./all');
const single = require('./single');

albums.param('albumId', findObject('album'));

albums.get('/', all);
albums.get('/:albumId', single);

module.exports = albums;