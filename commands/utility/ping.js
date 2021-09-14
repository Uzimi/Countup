const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     */
    run: async (client, message) => {
        message.channel.send("Booping...").then((pinged) => {
            pinged.edit(`RTT *(Roundtrip Response Time)*: ${client.ws.ping}ms`);
        });
    },
};
