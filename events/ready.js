const portle = require("../server");

portle.on("ready", async (interaction) => {
    const guildId = 884380331170484244n;

    // This function will log all interactions to the console. Debugging purposes
    const getApp = (guildId) => {
        const app = portle.api.applications(portle.user.id)
        if (guildId) {
            app.guilds(guildId)
        }
        return app
    }

    // To delete slash commands use the method below
    // await getApp(guildId).commands('887175174615609414').delete()

    const slashcmds = await getApp(guildId).commands.get();
    console.log('Interactions ->');
    console.log(slashcmds);
    console.log("Portoise is wakey wakey");
});
