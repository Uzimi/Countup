const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const mongoose = require("mongoose");

const globPromise = promisify(glob);

/**
 * @param {Client} count
 */
module.exports = async (count) => {

    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            count.commands.set(file.name, properties);
        }
    });

    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    const mongooseURI = process.env.URI;
    if (!mongooseURI) throw new Error("Unspecified mongoose connection string!");

    mongoose.connect(mongooseURI).then(() => console.log('Connected to mongodb'));
};