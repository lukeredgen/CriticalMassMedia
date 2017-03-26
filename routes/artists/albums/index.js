/**
 * Created by luke on 22/3/17.
 */
const albums = require('express').Router({ mergeParams: true });
const all = require('./all');

albums.get('/', all);

module.exports = albums;