var database = require('../../Engine/database.js');

exports.run = (jarvis, message, args, language) => {
  database.Users.findOne({ _id: message.author.id }, function (erro, usuario) {
    if (usuario) {
      if (message.member.hasPermission(['KICK_MEMBERS'])) {
        if (message.mentions.users.size > 0) {
          var alvo = message.mentions.users.first();

          if (message.guild.member(alvo).kickable) {
            if (
              message.guild.members.get(message.author.id).highestRole
                .position >=
              message.guild.members.get(alvo.id).highestRole.position
            ) {
              jarvis.guilds.get(message.guild.id).members.get(alvo.id).kick();
              message.channel.sendMessage(`**${language.kick.sucesso}** `);
            } else {
              message.channel.sendMessage(`**${language.kick.rank}**`);
            }
          } else {
            message.channel.sendMessage(`**${language.kick.send}** `);
          }
        } else {
          message.channel.sendMessage(`**${language.kick.mencao}**`);
        }
      } else {
        message.reply(`**${language.kick.perm}**`);
      }
    } else {
      message.channel.sendMessage(`**${language.kick.erro}** `);
    }
  });
};
exports.help = {
  name: 'kick',
  aliases: ['kick', 'kickar'],
  diretorio: 'Moderação',
  desc: 'Database Kick System',
  cat: 'Moderação',
};
