const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://discord-tokenli-aktif.glitch.me/");
}, 3000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const index1 = new Discord.Client();
const index2 = new Discord.Client();
const index3 = new Discord.Client();
const index4 = new Discord.Client();
const index5 = new Discord.Client();

index1.login("token yaz");
index2.login("token yaz");
index3.login("token yaz");
index4.login("token yaz");
index5.login("token yaz");
