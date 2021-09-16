const portle = require(`${process.cwd()}/server.js`);

portle.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(portle.config.DEF_PREFIX)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(portle.config.DEF_PREFIX.length)
        .trim()
        .split(" ");

    const command = portle.commands.get(cmd.toLowerCase()) || portle.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return message.channel.send('Uh oh! Looks like you are trying to run a non-existing command :/');
    await command.run(portle, message, args);
});
