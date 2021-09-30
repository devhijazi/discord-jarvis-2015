const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = async (jarvis, message, args, language) => {
  var rol = args[0];
  let role =
    message.guild.roles.find(x => x.name == `${rol}`) ||
    message.mentions.roles.first();
  var hata = new Discord.RichEmbed()
    .setColor('#36393e')
    .setDescription(`${language.roleinfo.embed.description}`);
  if (!role) return message.channel.send(hata);

  moment.locale('en-US');
  var roleinfoEmbed = new Discord.RichEmbed()
    .setColor('#36393e')
    .setAuthor('Tag-Info ' + jarvis.user.username, jarvis.displayAvatarURL)
    .setThumbnail(jarvis.user.avatarURL)
    .addField(
      `<:dev:532752479733940264>${language.roleinfo.embed.field1}`,
      '**' + role.name + '**',
      true,
    )
    .addField('<:dev:532752479733940264>ID', '**' + role.id + '**', true)
    .addField(
      `<:dev:532752479733940264>${language.roleinfo.embed.field2}`,
      '**' + role.members.size + '**',
      true,
    )
    .addField(
      '<:dev:532752479733940264>Hexadecimal',
      '**' + role.hexColor + '**',
      true,
    )
    .addField(
      `<:dev:532752479733940264>${language.roleinfo.embed.field3}`,
      role.mentionable ? '**Yes**' : '**No**',
      true,
    )
    .addField(
      `<:dev:532752479733940264>${language.roleinfo.embed.field4}`,
      '**' + moment(role.createdAt).format('LL') + '**',
      true,
    )
    .setImage('https://i.imgur.com/vXRfAd6.gif')
    .setFooter('Jarvis Bot');
  message.channel.send(roleinfoEmbed);
};
exports.help = {
  name: 'roleinfo',
  aliases: ['role', 'roleinfo'],
  diretorio: 'Discord',
  desc: 'Role informations',
  cat: 'Discord',
};
