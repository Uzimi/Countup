const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "bless",
    description:
        "There is a 0.1% chance of you getting bless by me, nice odds!",
    type: "CHAT_INPUT",
    /**
     * @param {Client} _portle
     * @param {CommandInteraction} interaction
     */
    run: async (portle, interaction) => {
        const percent = Math.random();

        if (percent < 0.2) {
            interaction.reply({content:"Woohoo, I blessed you :). You are a very lucky person."});
        } else {
            interaction.reply({content: "Whoops, couldn't bless you. Try again ok?"});
        }
    },
};
