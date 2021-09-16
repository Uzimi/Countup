const { Message, Client } = require("discord.js");

module.exports = {
    name: "user",
    aliases: ['userinfo', 'ui'],
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run: async (client, message) => {
        const { MessageEmbed } = require('discord.js');
        const moment = require('moment');

        const target = message.mentions.users.first() || message.author || message.mentions.users.first().id;
        const member = message.guild.members.cache.get(target.id);

        const userInfo = new MessageEmbed()
            .setAuthor(`${target.username}`, target.displayAvatarURL({ dynamic: true }))
            .setThumbnail(target.displayAvatarURL({ dynamic: true }))
            .setColor('#AAF0AE')
            .addField('Member ID:', `${target.id}`, false)
            .addField('Roles:', `${member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
            .addField('Server member since: ', `${moment(member.joinedAt).format('MMMM DD YYYY, h:mm:ss a')}\n**-** ${moment(member.joinedAt).fromNow()}`)
            .addField('Discord user since: ', `${moment(target.createdAt).format('MMMM DD YYYY, h:mm:ss a')}\n**-** ${moment(target.createdAt).fromNow()}`)
        message.channel.send({ embeds: [userInfo] });
    },
};

