const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (jarvis, message, args, language) => {
  moment.locale('pt-BR');
  try {
    let emoji = message.guild.emojis.find(
      emoji => emoji.name === `${args.join(' ')}`,
    );
    let animado;
    if (emoji.animated === true) animado = 'YES';
    if (emoji.animated === false) animado = 'NO';
    let emo;
    if (emoji.animated === true)
      emo = '**`' + `<a:${emoji.name}:${emoji.id}>` + '`**';
    if (emoji.animated === false)
      emo = '**`' + `<:${emoji.name}:${emoji.id}>` + '`**';
    const embed = new Discord.RichEmbed()
      .setTitle(`${language.emoji.embed.title}**[${emoji.name}]**`)
      .setColor('RANDOM')
      .setThumbnail(`${emoji.url}`)
      .addField(
        `**<:dev:532752479733940264>${language.emoji.embed.field1}**`,
        `**` + emoji.guild.name + `**`,
        true,
      )
      .addField(
        `**<:dev:532752479733940264>${language.emoji.embed.field2}**`,
        `**` + animado + `**`,
        true,
      )
      .addField(
        `**<:dev:532752479733940264> ${language.emoji.embed.field3}**`,
        `**` + moment(emoji.createdAt).format('LL') + `**`,
        true,
      )
      .addField('🆔', `**` + emoji.id + `**`, true)
      .addField(
        `**<:downarrow:525349220534845451> ${language.emoji.embed.export}**`,
        `${emo}`,
      )
      .setFooter(
        `${language.emoji.embed.footer} ${message.author.tag}`,
        message.author.avatarURL,
      );
    message.channel.send(embed);
  } catch (err) {
    const embed = new Discord.RichEmbed()
      .setTitle(language.emoji.embed.title2)
      .setColor('RANDOM')
      .setThumbnail(
        'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png',
      )
      .setDescription(`${language.emoji.embed.description}`);
    message.channel.send(embed);
  }
};
exports.help = {
  name: 'emoji',
  aliases: ['emoji', 'e-info', 'emoji-info'],
  diretorio: 'Discord',
  desc: 'Informations about custom emojis on Guild, exports, ID, animation etc...',
  cat: 'Discord',
};
