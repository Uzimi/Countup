const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Returns portle's latency",
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