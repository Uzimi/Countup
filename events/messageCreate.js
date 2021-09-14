const portle = require("../server");

portle.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(portle.config.DEF_PREFIX)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(process.env.DEF_PREFIX.length)
        .trim()
        .split(" ");

    const command = portle.commands.get(cmd.toLowerCase()) || portle.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(portle, message, args);
});
