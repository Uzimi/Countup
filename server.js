const { Client } = require("discord.js");

const portle = new Client({
    intents: 32767,
});

portle.on("messageCreate", async (message) => {
    if (message.content === "myoek ping") {
        message.channel.send("Pinging...").then((pinged) => {
            pinged.edit(`RTT *(Roundtrip Response Time)*: ${pinged.createdTimestamp - message.createdTimestamp}ms`);
        });
    }
});

portle.on("messageCreate", (message) => {
    if (message.content === "myoek bless") {
        const percent = Math.random();

        if (percent < 0.2) {
            message.channel.send("Woohoo, I blessed you :). You are a very lucky person.");
        } else {
            message.channel.send("Whoops, couldn't bless you. Try again ok?");
        }
    }
});

portle.once("ready", () => {
    console.log("Portle has been summoned");
});

portle.login(process.env.TOKEN);
