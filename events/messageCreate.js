const count = require(`${process.cwd()}/server.js`);

count.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(count.config.DEF_PREFIX)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(count.config.DEF_PREFIX.length)
        .trim()
        .split(" ");

    const command = count.commands.get(cmd.toLowerCase()) || count.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return message.channel.send('Uh oh! Looks like you are trying to run a non-existing command :/');
    await command.run(count, message, args);
});
