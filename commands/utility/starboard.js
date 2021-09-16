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
        const starboard = new MessageEmbed()
            .setColor('#AAF0AE')
            .setTitle('Set up a starboard')
            .setDescription('To begin, please enter the preferred channel\n name where the starboard will be hosted.\n **Please use lowercase letters only.**')
            .setFooter('Made with love by Portoise :3')
        message.channel.send({ embeds: [starboard] });

        // const data = await starboardModel.findOne({ guildID: message.guild.id });
        // new starboardModel({
        //     guildID: message.guild.id,
        //     starMin: starMin,
        //     starboardChannel: String,
        // })
    },
};