const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if(message.content === "ayy") {
    message.channel.send("Ayy, lmao!");
  }
  if(message.content === "wat") {
    message.channel.send("Say what?");
  }
  if(message.content === "lol") {
    message.channel.send("roflmaotntpmp");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDc2NzQwNzY2Mzc5ODAyNjI1.DkzqWQ.NAszZfIgOutS5XPw8LXNoFK1dUY");
