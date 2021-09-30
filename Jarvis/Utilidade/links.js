const Discord = require('discord.js');

exports.run = async (jarvis, message, args) => {
  var embed = new Discord.RichEmbed()
    .setTitle('All links about jarvis and discord server.')
    .setColor('RANDOM')
    .addField(
      '☆Support Jarvis',
      `✌[**Discord**](https://discordapp.com/invite/j6jzwue)`,
      true,
    )
    .addField(
      '☆Add Bot on Jarvis',
      `✌[**Add**](https://docs.google.com/forms/d/e/1FAIpQLSfbB20uXAWSZ9N4XvjZ97_wwDEZYCqedqgp3-ZRVQwaZTfg7A/viewform)`,
      true,
    )
    .addField(
      '☆Vote #1',
      `✌[**Discord Bot List**](https://discordbotlist.com/bots/496746907037728768)`,
      true,
    )
    .addField(
      '☆Vote #2',
      `✌[**Discord Bot List**](https://discordbots.org/bot/496746907037728768/vote)`,
      true,
    )
    .addField(
      '☆Invite Jarvis',
      `✌[**Invite 1**](https://bots.ondiscord.xyz/bots/496746907037728768)`,
      true,
    )
    .addField(
      '☆Invite Jarvis',
      `✌[**Invite 2**](https://discordapp.com/oauth2/authorize?=&jarvis_id=496746907037728768&scope=bot&permissions=9)`,
      true,
    )
    .addField(
      '☆Follow Owner',
      `✌[**Instagram**](https://www.instagram.com/_hiijazi/)`,
      true,
    )
    .setFooter(
      `Jarvis © - 2018 Thank-you for voting and follow !!!`,
      message.author.avatarURL,
      true,
    )
    .setImage('https://i.imgur.com/vXRfAd6.gif')
    .setTimestamp();
  message.channel.send(embed);
};
exports.help = {
  name: 'links',
  aliases: ['link'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: 'Other Special links', // opcional
  cat: 'Utilidade',
};
//LINKS SOBRE O JARVIS
