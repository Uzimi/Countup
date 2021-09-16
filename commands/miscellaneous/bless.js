const { Message, Client } = require("discord.js");

module.exports = {
    name: "bless",
    aliases: ['blessme'],
    /**
     *
     * @parnam {Client} portle
     * @param {Message} message
     */
    run: (_portle, message) => {
        const percent = Math.random();

         if (percent < 0.2) {
             message.channel.send("Woohoo, I blessed you :). You are a very lucky person.");
         } else {
             message.channel.send("Whoops, couldn't bless you. Try again ok?");
         }
    },
};