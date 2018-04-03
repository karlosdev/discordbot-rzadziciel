const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "rządzisz") {
        message.channel.sendMessage("Rządzisz gościu! Pamiętaj nie przejmuj się innymi!");
    }
});

bot.login(process.env.BOT_TOKEN);
