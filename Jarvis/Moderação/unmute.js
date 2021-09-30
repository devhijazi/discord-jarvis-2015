const database = require('../../Engine/database.js');

exports.run = async (jarvis, message, args, language) => {
  let mat = message.author.tag;

  database.Users.findOne(
    { _id: message.author.id },
    async function (erro, usuario) {
      if (usuario.owner || message.member.hasPermission('ADMINISTRATOR')) {
        if (!args[0]) {
          message.channel.send({
            embed: {
              description: `${language.unmute.embed.description}`,
              color: 0x36393e,
            },
          });
        }
        let muteRole = message.guild.roles.find(x => x.name == 'Muted');

        let member = message.mentions.members.first();
        let memberA = message.mentions.members.first();

        let memberRole = memberA.roles.find(xa => xa.name == 'Muted');

        if (!memberRole) {
          return message.channel.send({
            embed: {
              description: `${language.unmute.embed.description2}`,
              color: 0x36393e,
            },
          });
        }

        if (!member)
          return message.channel.send({
            embed: {
              description: `${language.unmute.embed.descriptio3}`,
              color: 0x36393e,
            },
          });

        try {
          member.removeRole(muteRole);
          message.channel.send({
            embed: {
              description: `${member}, ${language.unmute.embed.descriptio4} **${message.author.tag}**`,
              color: 0x36393e,
            },
          });
        } catch (err) {
          message.channel.send({
            embed: {
              description: `${language.unmute.embed.perm}`,
              color: 0x36393e,
            },
          });
        }
      } else {
        var yEmbed = new Discord.RichEmbed()

          .setColor('#36393e')
          .setDescription(`${language.unmute.embed.perm2}`);
        message.channel.send(yEmbed);
      }
    },
  );
};
exports.help = {
  name: 'unmute',
  aliases: ['unmute', 'u-m'],
  diretorio: 'Moderação',
  desc: 'unmute the user',
  cat: 'Moderação',
};
