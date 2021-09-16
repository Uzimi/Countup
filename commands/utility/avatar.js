const { Message, Client, MessageEmbed } = require("discord.js");
const portle = require(`${process.cwd()}/server.js`);

module.exports = {
    name: "avatar",
    aliases: ['pfp'],
    /**
     * @param {Client} portle
     * @param {Message} message
     */
    run: (_portle, message) => {

        const requester = message.mentions.users.first()
            || message.author;

        const avatar = new MessageEmbed()
            .setColor('#AAF0AE')
            .setTitle(`Here you are, ${requester.username} :)`)
            .setImage(`${requester.displayAvatarURL({ dynamic: true, size: 256 })}`)
            .setFooter('Made with love by Portoise :3')
        message.channel.send({ embeds: [avatar] });
    },
};