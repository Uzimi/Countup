const { Message, Client, MessageEmbed } = require("discord.js");
const portle = require(`${process.cwd()}/server.js`);

module.exports = {
    name: "settings",
    aliases: ['preferences'],
    /**
     * @param {Client} portle
     * @param {Message} message
     */
    run: (_portle, message) => {
        const settings = new MessageEmbed()
            .setColor('#AAF0AE')
            .setTitle('Customize your Portoise experience!')
            .setDescription('Nothing to modify at the moment. Come back later :)')
            .setFooter('Made with love by Portoise :3')
        message.channel.send({ embeds: [settings] });
    },
}