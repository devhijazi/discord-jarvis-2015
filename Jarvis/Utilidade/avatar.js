const Discord = require('discord.js');

module.exports.run = async (jarvis, message, args, language) => {
  var array = ['Avatar Picture'];
  if (!args[0])
    return message.channel.send(
      `<@${message.author.id}> **${language.avatar.send1}**`,
    );
  let member =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  let embed = new Discord.RichEmbed()
    .setAuthor(`${language.avatar.title} ${member.user.username}`)
    .setImage(`${member.user.avatarURL}`)
    .setFooter(`${randomElement}`, `${jarvis.user.avatarURL}`)
    .setTimestamp(new Date())
    .setColor('#EAB543');
  message.channel.send(embed);
};
exports.help = {
  name: 'avatar',
  aliases: ['picture'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: 'Show avatar picture', // opcional
  cat: 'Utilidade',
};
