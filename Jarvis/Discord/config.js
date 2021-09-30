const Discord = require('discord.js');
const database = require('../../Engine/database.js');

exports.run = async (jarvis, message, args, language) => {
  database.Guilds.findOne({ _id: message.guild.id }, function (erro, servidor) {
    let welcome = servidor.welcome;
    let = welcome;
    if (welcome === true) welcome = '[ON] <:on:532294816751419394> ';
    if (welcome === false) welcome = '[OFF] <:off:532294816671858689> ';

    let saida = servidor.byebye;
    let = saida;
    if (saida === true) saida = '[ON] <:on:532294816751419394>';
    if (saida === false) saida = '[OFF] <:off:532294816671858689>';

    let antInv = servidor.antinvite;
    let = antInv;
    if (antInv === true) antInv = '[ON] <:on:532294816751419394>';
    if (antInv === false) antInv = '[OFF] <:off:532294816671858689>';

    let autorole = servidor.autorole;
    let = autorole;
    if (autorole === true) autorole = '[ON] <:on:532294816751419394>';
    if (autorole === false) autorole = '[OFF] <:off:532294816671858689>';

    let contador = servidor.contador;
    let = contador;
    if (contador === true) contador = '[ON] <:on:532294816751419394>';
    if (contador === false) contador = '[OFF] <:off:532294816671858689>';

    message.channel.startTyping();

    var embedConfig = new Discord.RichEmbed()

      .setTitle(language.config.embed.title)
      .setThumbnail(jarvis.user.displayAvatarURL)
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .addField(
        `**<:indicadorazul:530429790084268032>${language.config.embed.config1} ${antInv}**`,
        `Use \`${servidor.prefix}ant-invite\`,${language.config.embed.uso1}`,
      )
      .addField(
        `**<:indicadorazul:530429790084268032>${language.config.embed.config2} ${welcome}**`,
        `Use \`${servidor.prefix}welcome config on\`, ${language.config.embed.uso2}`,
      )
      .addField(
        `**<:indicadorazul:530429790084268032>${language.config.embed.config3} ${saida}**`,
        `Use \`${servidor.prefix}byebye config on\`, ${language.config.embed.uso3}`,
      )
      .addField(
        `**<:indicadorazul:530429790084268032>${language.config.embed.config4} ${autorole}**`,
        `Use \`${servidor.prefix}autorole <@rolename>\`, ${language.config.embed.uso4}`,
      )
      .addField(
        `**<:indicadorazul:530429790084268032>${language.config.embed.config5} ${contador}**`,
        `Use \`${servidor.prefix}count\`, ${language.config.embed.uso5}`,
      )
      .addField(
        `**<:indicadorazul:530429790084268032>${language.config.embed.config6} \`[${servidor.prefix}]\`**`,
        `Use \`setprefix on [prefix]\`, ${language.config.embed.uso6}`,
      )
      .setColor('#36393e');
    message.channel.stopTyping();
    message.channel.send(embedConfig).then(async msg => {
      await msg.react('📫');

      const delfilter = (reaction, user) =>
        reaction.emoji.name === '📫' && user.id === message.author.id;
      const del = msg.createReactionCollector(delfilter, { time: null });
      del.on('collect', jarvis => {
        msg.delete();
      });
    });
  }).catch(e => {
    console.log('Mongoose Duplicada');
  });
};
exports.help = {
  name: 'config',
  aliases: ['config', 'cfg', 'configuração', 'discordcfg', 'guildconfig'],
  diretorio: 'Discord',
  desc: 'shows the jarvis settings enabled on your server.',
  cat: 'Discord',
};
