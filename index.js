const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keepAlive = require("./server")

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  bitly_axel = "https://bit.ly/axel_ontop"

  const r = new Discord.RichPresence()
    .setApplicationId('1102935293943881738')
    .setType('WATCHING') 
    .setURL('https://discord.gg/FGasxcfd9A')
    .setState('𝑇𝛨𝛯 𝛩𝛮𝐿𝑌 𝑇𝛪𝛭𝛯 𝑌𝛩𝑈 𝐷𝛩𝛮’𝑇 𝑊𝛥𝛮𝑇 𝑇𝛩 𝐹𝛥𝛪𝐿 𝛪𝑆 𝑇𝛨𝛯 𝐿𝛥𝑆𝑇 𝑇𝛪𝛭𝛯 𝑌𝛩𝑈𝑅 𝑇𝑅𝑌.')

    .setName('KING-OP')
    .setDetails('DOMINATOR-XD')


    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/emojis/1103501015308845096.png')
    .setAssetsLargeText('Website & Yt Channel')
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1065094055425482792.gif?v=1&size=64&quality=lossless')
    .setAssetsSmallText('Co - Owner')
        .addButton('DISCORD', "https://discord.gg/FGasxcfd9A")
                   .addButton('YouTube',"https://youtube.com/@TeamIndianhacker")

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });
})
require('dotenv').config();
keepAlive();
client.login(process.env.token) //Your account token

// man put ur token in secrets