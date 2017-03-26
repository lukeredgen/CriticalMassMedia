/**
 * Created by luke on 22/3/17.
 */
const data = require('../data.json');

module.exports = type => {
    return (req, res, next, value) => {
        const typePlural = `${type}s`;
        const obj = data[typePlural].find(t => t.name === value);

        if (obj) {
            req[type] = obj;
            next();
        }
        else {
            res.status(404).send(`Invalid ${type} ID`);
        }
    };
};