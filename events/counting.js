const client = require('../server');
const db = require(`${process.cwd()}/commands/models/Guilds`);
const user = require(`${process.cwd()}/commands/models/Users`);
client.on('messageCreate', async (message) => {
    const data = await db.findOne({ id: message.guild.id });

    if(!data) return;

    if(message.channel.id !== data.Channel) return;
    if(parseInt(message.content) === data.Current + 1) {
        message.react('✔')
        user.findOne({ id: message.author.id, Guild: message.guild.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                data.Counts++;
            } else {
                data = new user({
                    id: message.author.id,
                    Guild: message.guild.id,
                    Counts: 1
                })
            }
            data.save();
        })
    
        data.Current = parseInt(message.content);
        data.save();
    } else if (typeof message.content == 'string'){
        message.reply("You messed up the train, can't imagine lol.")
    } else {
        return;
    }
})