const { Client, Message, MessageEmbed } = require('discord.js');
const Guild = require(`${process.cwd()}/commands/models/Guilds`);
  module.exports = {
      name: 'set-channel',
      /** 
       * @param {Client} client 
       * @param {Message} message 
       * @param {String[]} args 
       */
      run: async(client, message, args) => {
        const channel = message.mentions.channels.first();
        if(!channel) return message.reply("Are you dumb? You didn't set a channel smh")
        Guild.findOne({
          id: message.guild.id,
        }, async(err, data) => {
          if(err) throw err;
          if(data) {
            data.Channel = channel.id;
          } else {
            data = new Guild({
              id: message.guild.id,
              Current: 0,
              Channel: channel.id
            })
          }
          data.save();
          message.channel.send('I have been binded to' + channel.toString());
        })
      }
  }