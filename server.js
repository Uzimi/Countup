const { Client, Collection, Intents } = require("discord.js");
const mongoose = require('mongoose');

const count = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
module.exports = count;

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Database error occured.'));

count.database = database;
count.commands = new Collection();
count.slashCommands = new Collection();
count.config = require("./config.json");

require("./handler")(count);

count.login(process.env.TOKEN);
