// Set the prefix
const prefix = "!";
client.on("message", (message) => {
  // our new check:
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  // [rest of the code]
});
