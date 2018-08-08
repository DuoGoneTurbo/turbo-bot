const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDc2NzQwNzY2Mzc5ODAyNjI1.DkyhNw.H8JYoJ_TXbhoMG-9ZE8nawOBo3E");
