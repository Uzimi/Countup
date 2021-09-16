const { Message, Client, MessageEmbed } = require("discord.js");
const portle = require(`${process.cwd()}/server.js`);
const starboardModel = require(`${process.cwd()}/commands/models/userSchema.js`);

module.exports = {
    name: "setstarboard",
    aliases: ['starboard', 'board'],
    /**
     * @param {Client} portle
     * @param {Message} message
     */
    run: async (_portle, message) => {

        const starboard0 = new MessageEmbed()
            .setColor('#AAF0AE')
            .setTitle('Set up a starboard')
            .setDescription('To begin, please enter the preferred channel\n name where the starboard will be hosted.\n **Please use lowercase letters only.**')
            .setFooter('Made with love by Portoise :3')
        
        const starboard1 = new MessageEmbed()
            .setColor('#AAF0AE')
            .setTitle('Define minimum star count')
            .setDescription("Tell me the amount of stars a messages has to have before it can be added\n to the starboard")
            .setFooter('Made with love by Portoise :3')
        
        const starboard2 = new MessageEmbed()
            .setColor('#AAF0AE')
            .setTitle('Optional')
            .setDescription("Should I auto-purge the starboard after 30 days to prevent server lag? *Only needed for big servers*")
            .setFooter('Made with love by Portoise :3')

        const embedCount = [
            starboard0,
            starboard1,
            starboard2
        ]

        const filter = m => (m.author.id === message.author.id);

        let counter = 0
        const collector = message.channel.createMessageCollector({ filter, max: embedCount.length, time: 15000 });

        message.channel.send({ embeds: [embedCount[counter++]]})

        collector.on('collect', (message) => {
            if (counter < embedCount.length) {
                message.channel.send({ embeds: [embedCount[counter++]]})
            }
        });

        collector.on('end', (collected) => {
            let counter = 0
            collected.forEach((message) => {
                message.channel.send(message.content)
            });

            if (collected.size < embedCount.length) {
                message.channel.send("Looks like you didn't answer the questions in time :/")
            } else {
                message.channel.send(`Collected ${collected.size} response(s)`);
            };
        });
    },
};