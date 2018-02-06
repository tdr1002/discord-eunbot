const Discord = require("discord.js");

const TOKEN = "NDA5MzE1MTkxODE4Mjg5MTUy.DVdtHg.QlfF9w0HK55-ixTtbYOyDQDxRX4";
const PREFIX = "E";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready")
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLocaleLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("I' m a super dope bot created my Me");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can t read that");
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .addField("Test Title", "Test Description", true)
                .addField("Test Titl2e", "Test De2scription", true)
                .addField("Test 3Title", "Test De3scription", true)
                .addField("Test 3Titl53e", "Test De3sc345ription")
                .addField("Test 3Titl4e", "Test De3s4cription")
                .setColor(0x00FFFF)
                .setFooter("This message is pretty cool, ohhh did i say message i mean EMBED gooteemmmmmmmm")
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;
        case "noticeme":
            mess.channel.sendMessage(message.author.toString() + "adfjkldjfljsljsdlfjlj");
            break;
        default:
            message.channel.sendMessage("Invalid commands")
    }

    if (message.content == "안녕") {
        message.channel.sendMessage("반가워!");
    }
    
    if (message.content == "놀아줘") {
        message.channel.sendMessage("뭐하고 놀까?");
    }
});

bot.login(TOKEN);