const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
moment.locale('en-US');
const database = require('../../Engine/database');

exports.run = async (jarvis, message, args, language) => {
  database.Guilds.findOne(
    {
      _id: message.guild.id,
    },
    function (err, doc) {
      if (doc) {
        //comando de ban(exec do comando)
        let reason = args.slice(1).join(' ');
        let user = message.guild.member(
          message.mentions.users.first() || message.guild.members.get(args[0]),
        );
        if (message.author.bot)
          return message.channel.sendMessage(
            +message.author.username + `${language.ban.send}`,
          );
        if (!message.member.hasPermission(['BAN_MEMBERS']))
          return message.reply(`${language.ban.permissão}`);
        if (reason.length < 2) return message.reply(`${language.ban.reason}`);
        if (!message.guild.member(user).bannable)
          return message.channel.sendMessage(`${language.ban.send1}`);
        message.delete();
        var banEmbed = new Discord.RichEmbed()
          .setAuthor(
            `${language.ban.embed.title}`,
            jarvis.user.displayAvatarURL,
          )
          .setColor('#ed1c54')
          .addField(`**:bow: ${language.ban.embed.field1}**`, `${user}`, true)
          .addField(
            `**•${language.ban.embed.field2}**`,
            `**#${user.discriminator}**`,
            true,
          )
          .addField(
            `**${language.ban.embed.field3}**`,
            moment.utc(user.joinedAt).format('**LL**'),
            true,
          )
          .addField(
            `**${language.ban.embed.field4}**`,
            moment.utc(message.createdAt).format('`LL`'),
            true,
          )
          .addField(`**${language.ban.embed.field5}**`, `${jarvis.user}`, true)
          .addField(
            `**👱 ${language.ban.embed.field6}**`,
            `<@${message.author.id}>`,
            true,
          )
          .addField(
            `**:speech_balloon:${language.ban.embed.field7}**`,
            message.channel,
            true,
          )
          .addField(
            `**🕍 ${language.ban.embed.field8}**`,
            `**${message.guild}**`,
            true,
          )
          .addField(`**🆔 ${language.ban.embed.field9}**`, `\`${user}\``, true)
          .addField(
            `**${language.ban.embed.field10}**`,
            `${message.member.lastMessage}`,
            true,
          )
          .addField(
            `**•${language.ban.embed.field11}**`,
            `\`${message.member.lastMessageID}\``,
            true,
          )
          .setThumbnail(
            'https://toppng.com/public/uploads/preview/banned-stamp-11523437622xs4e82cocq.png',
          )
          .setDescription(`**${language.ban.embed.description}**`)
          .addBlankField()
          .setImage(user.displayAvatarURL)
          .addField(
            `**:calendar: ${language.ban.embed.field12}**`,
            moment.utc(message.createdAt).format('**LLLL**'),
            true,
          )
          .addField(
            `**:pencil: ${language.ban.embed.reason2}**`,
            `\`${reason}\``,
            true,
          );

        if (doc.logschannel === 'Nenhum')
          return message.channel.send(`${language.ban.embed.logcanal}`);
        message.guild.member(user).ban(reason);
        if (message.guild.member(user).ban) {
          message.channel.send(`**${language.ban.embed.sucesso}**`);
        }
        //aqui começa o find
        let canal = message.guild.channels.find(
          channel => channel.id === doc.logschannel,
        );
        canal.send(banEmbed);
      } else {
        var save = new database.Guilds({ _id: message.guild.id });
        save.save();
      }
    },
  );
};
exports.help = {
  name: 'ban',
  aliases: ['banir', 'ban'],
  diretorio: 'Moderação',
  desc: 'Database Ban System',
  cat: 'Moderação',
};
