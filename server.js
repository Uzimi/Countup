const { Client, Collection } = require("discord.js");
const mongoose = require('mongoose');

const portle = new Client({
    intents: 32767,
});
module.exports = portle;

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Database error occured.'));

portle.database = database;
portle.commands = new Collection();
portle.slashCommands = new Collection();
portle.config = require("./config.json");

require("./handler")(portle);

portle.login(process.env.TOKEN);
