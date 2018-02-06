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
        case "자살":
            message.channel.sendMessage("아직 세상은 살만해요 자살예방센터 : http://www.spckorea.or.kr")
            break;
        case "도움":
            message.channel.sendMessage("명령어가 뭔지 궁금하면 들어가 보라구! http://eungyu.pe.hu/LLL")
        default:
            message.channel.sendMessage("없는 명령어 입니다 E도움")
    }
});

bot.login(TOKEN);