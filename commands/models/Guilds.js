const mongo = require('mongoose');

module.exports = mongo.model('Guilds', new mongo.Schema({
    id: String,
    Current: Number,
    Channel: String
}))