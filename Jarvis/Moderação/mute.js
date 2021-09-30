const database = require('../../Engine/database.js');

exports.run = async (jarvis, message, args, language) => {
  let mat = message.author.tag;

  database.Users.findOne(
    { _id: message.author.id },
    async function (erro, usuario) {
      if (usuario.owner || message.member.hasPermission('ADMINISTRATOR')) {
        if (!args[0])
          return message.channel.send({
            embed: {
              description: `**${language.mute.embed.description}** `,
              color: 0x36393e,
            },
          });

        var user = message.mentions.members.first();
        var razao = args.slice(1).join(' ');
        if (!razao) razao = `${language.mute.embed.razao}`;
        var muteRole = message.guild.roles.find(x => x.name == 'Jarvis Muted');

        if (!muteRole)
          return message.channel.send({
            embed: {
              description: `${mat}, ${language.mute.embed.role}`,
              color: 0x36393e,
            },
          });

        if (user.roles.find(th => th.name == 'Jarvis Muted')) {
          return message.channel.send({
            embed: {
              description: `${mat},${language.mute.embed.mutado}`,
              color: 0x36393e,
            },
          });
        }

        try {
          user.addRole(muteRole);
          return message.channel.send({
            embed: {
              description: `${language.mute.embed.description2}**${razao}**`,
              color: 0x36393e,
            },
          });
        } catch (err) {
          message.channel.send({
            embed: {
              description: `${language.mute.embed.perm}`,
              color: 0x36393e,
            },
          });
        }
      } else {
        var yEmbed = new Discord.RichEmbed()

          .setColor('#36393e')
          .setDescription(`${language.mute.embed.perm2}`);
        message.channel.send(yEmbed);
      }
    },
  );
};
exports.help = {
  name: 'mute',
  aliases: ['mutar', 'mudo'],
  diretorio: 'Moderação',
  desc: 'Mute the user',
  cat: 'Moderação',
};
