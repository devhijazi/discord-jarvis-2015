const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');

exports.run = async (jarvis, message, args, language) => {
  let usuario = message.guild.member(
    message.mentions.users.first() ||
      jarvis.users.get(args[0]) ||
      message.author,
  );
  let cargos = usuario.roles
    .map(a => a)
    .slice(1)
    .join(' ❙ ');
  let nomeeapelido =
    message.guild.member(message.author.id).nickname || 'No nickname';
  var embed = new Discord.RichEmbed()

    .setTitle(language.userinfo.embed.title)
    .setColor('RANDOM')
    .setThumbnail(usuario.user.displayAvatarURL)
    .addField(
      `**•${language.userinfo.embed.field1}**`,
      `**${usuario.user.username}**`,
      true,
    )
    .addField(
      `**•${language.userinfo.embed.field2}**`,
      `**${moment(usuario.user.createdAt).format('L')}**`,
      true,
    )
    .addField('**•Tag**', `**#${usuario.user.discriminator}**`, true)
    .addField(
      `**•${language.userinfo.embed.field3}**`,
      `**${moment(usuario.user.joinedAt).format('L')}**`,
      true,
    )
    .addField(
      `**•${language.userinfo.embed.field4}**`,
      `**${nomeeapelido}**`,
      true,
    )
    .addField('**•ID:**', `**${usuario.id}**`, true)
    .addField(
      `**•${language.userinfo.embed.field5}**`,
      `**${usuario.presence.game ? usuario.presence.game.name : '**None**'}**`,
      true,
    )
    .addField(
      `**•${language.userinfo.embed.field6}**`,
      `**${message.author.lastMessage}**`,
      true,
    )
    .addField(
      `**•${language.userinfo.embed.field7}**`,
      `**${message.author.lastMessageID}**`,
      true,
    )
    .addField(`**•${language.userinfo.embed.field8}**`, `**✅ ${cargos}**`)

    .setFooter(
      `${language.userinfo.embed.footer}`,
      message.author.avatarURL,
      true,
    )
    .setTimestamp();
  message.channel.send(embed);
};
exports.help = {
  name: 'userinfo',
  aliases: ['userinfo', 'user', 'usuário'],
  diretorio: 'Discord',
  desc: 'User info',
  cat: 'Discord',
};
