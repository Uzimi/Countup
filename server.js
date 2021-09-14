const { Client, Collection } = require("discord.js");

const portle = new Client({
    intents: 32767,
});
module.exports = portle;
portle.commands = new Collection();
portle.slashCommands = new Collection();
portle.config = require("./config.json");

require("./handler")(portle);

portle.login(process.env.TOKEN);
