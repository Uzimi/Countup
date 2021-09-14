const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     * @param {Client} _portle
     * @param {CommandInteraction} interaction
     */
    run: async (portle, interaction) => {
        await interaction.reply({ content: "*Beep boop...*" }).then((pinged) => {
            interaction.editReply({ content: `RTT *(Roundtrip Response Time)*: ${portle.ws.ping}ms`})
        });
    },
};