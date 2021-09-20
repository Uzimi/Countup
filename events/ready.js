const count = require("../server");

count.on("ready", async (interaction) => {
    const guildId = 884380331170484244n;
    count.user.setActivity(`${count.guilds.cache.size} server(s) count to 1 million!!`, { type: 'WATCHING' });
    console.log('Countup is up and counting!');
});
