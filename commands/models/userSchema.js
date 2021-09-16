const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starboardSchema = new Schema({
    guildID: Number,
    starMin: Number,
    starboardChannel: String,
});

const starboardModel = mongoose.model('Starboards', starboardSchema);
module.exports = starboardModel;