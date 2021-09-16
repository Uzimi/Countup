const { Message, Client} = require("discord.js");
const portle = require(`${process.cwd()}/server.js`);

module.exports = {
    name: "begintest filter",
    aliases: ['filter'],
    /**
     * @param {Client} portle
     * @param {Message} message
     */
    run: async (_portle, message) => {
        message.channel.send("This is a test to see if portoise will listen to any non message.author reponses.\n Uses: settings, starboard setup, and future commands. Type *portle*");
        const filter = m => (m.author.id === message.author.id) && (m.content === 'portle');
        await message.channel.awaitMessages({ filter, max: 5, time: 10000, errors: ['time'] })
                .then(collected => message.channel.send(`Vote concluded. Maximum: ${collected.size}`))
                .catch(collected => message.channel.send(`After 10 seconds, ${collected.size} out of 5 voted.`));
    },
};