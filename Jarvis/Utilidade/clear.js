const database = require('../../Engine/database.js');
const Discord = require('discord.js');

exports.run = async (jarvis, message, args, language) => {
  try {
    database.Users.findOne(
      { _id: message.author.id },
      async function (erro, usuario) {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
          if (!message.guild.me.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send({
              embed: {
                description: `${language.clear.embed6}`,
                color: 0x36393e,
              },
            });

          var deleteCount = parseInt(args[0], 10);

          if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
            message.channel.send({
              embed: {
                description: `${language.clear.embed1}`,
                color: 0x36393e,
              },
            });
          } else if (isNaN(args[0])) {
            message.channel.send({
              embed: {
                description: `${language.clear.embed2}`,
                color: 0x36393e,
              },
            });
          } else {
            var fetched = await message.channel.fetchMessages({
              limit: deleteCount,
            });
            message.channel
              .bulkDelete(fetched)
              .then(gg => {
                message.channel
                  .send({
                    embed: {
                      description: `${language.clear.embed3} - ${message.author}\n${language.clear.embed4} :**\`${args[0]}\`**`,
                      color: 0x36393e,
                    },
                  })
                  .then(msg => {
                    msg.delete(5000);
                  });
              })
              .catch(erro => {
                message.channel.send({
                  embed: {
                    description: `${language.clear.embed5}`,
                    color: 0x36393e,
                  },
                });
              });
          }
        } else {
          var yEmbed = new Discord.RichEmbed()

            .setColor('#36393e')
            .setDescription(`${language.clear.permission}`);
          message.channel.send(yEmbed);
        }
      },
    );
  } catch (e) {
    console.log(
      `Erro comando de Limpar - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`,
    );
  }
};
exports.help = {
  name: 'clear',
  aliases: ['limpar'],
  diretorio: 'Utilidade',
  desc: 'clear',
  cat: 'Utilidade',
};
