const { Client, Collection } = require("discord.js");

const portle = new Client({
    intents: 32767,
});
module.exports = portle;
portle.commands = new Collection();
portle.slashCommands = new Collection();
portle.config = require("./config.json");

require("./handler")(portle);

portle.login(process.env.TOKEN);

// portle.on("messageCreate", async (message) => {
//     if (message.content === "myoek ping") {
//         // message.reply({content: "Pinging...", allowedMentions: { repliedUser: true }}).then((pinged) => {
//         message.channel.send("Pinging...").then((pinged) => {
//             pinged.edit(`RTT *(Roundtrip Response Time)*: ${pinged.createdTimestamp - message.createdTimestamp}ms`);
//         });
//     }
// });

// portle.on("messageCreate", (message) => {
//     if (message.content === "myoek bless") {
//         const percent = Math.random();

//         if (percent < 0.2) {
//             message.channel.send("Woohoo, I blessed you :). You are a very lucky person.");
//         } else {
//             message.channel.send("Whoops, couldn't bless you. Try again ok?");
//         }
//     }
// });
