const { Message, Client} = require("discord.js");
const portle = require(`${process.cwd()}/server.js`);

module.exports = {
    name: "vote",
    aliases: ['beginvote'],
    /**
     * @param {Client} portle
     * @param {Message} message
     */
    run: async (_portle, message) => {
        message.channel.send('This is a test, so please type **portle**');
        const filter = m => (m.content === 'portle');
        await message.channel.awaitMessages({ filter, max: 5, time: 10000, errors: ['time'] })
                .then(collected => message.channel.send(`Vote concluded. Maximum: ${collected.size}`))
                .catch(collected => message.channel.send(`After 10 seconds, ${collected.size} out of 5 voted.`));
    },
};