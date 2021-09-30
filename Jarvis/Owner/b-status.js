const database = require('../../Engine/database.js');
const Discord = require('discord.js');

exports.run = async (jarvis, message, args) => {
  database.Users.findOne({ _id: message.author.id }, function (erro, usuario) {
    try {
      if (
        message.author.id === '221865218840592384' ||
        message.author.id === '408762620770779138'
      ) {
        var stats = args.join(' ');

        if (!stats) {
          message.channel.send(` ${message.author}, insira meu **status**`);
        } else {
          jarvis.user.setPresence({
            game: {
              name: stats,
              type: 1,
              url: 'https://www.twitch.tv/_hiijazi',
            },
          });

          let yEmbed = new Discord.RichEmbed()

            .setThumbnail(
              `https://img.icons8.com/ios/1600/satellite-sending-signal.png`,
            )
            .setTitle('** TRANSMITINDO ALTERADO**')
            .setColor('36393e')
            .setFooter(`JARVIS © `, jarvis.user.displayAvatarURL)
            .addField('Transmitindo Agora ', `**> ${stats}**`);
          message.channel.send(yEmbed);
        }
      } else {
        var yEmbed = new Discord.RichEmbed()

          .setColor('#36393e')
          .setDescription(
            `${message.author}, você não tem **permissão** para executar esse **comando**`,
          );

        message.channel.send(yEmbed);
      }
    } catch (e) {
      console.log(`Erro no comando de transmitir - Erro: ${e}`);
    }
  });
};
exports.help = {
  name: 'b-status',
  aliases: ['transmitindo', 'jogando'], //formas De usar o cmd (qts quiser)
  diretorio: 'Owner', //pra poder usar o reload por pasta
  desc: 'Transmitindo somente para Owners registrados.', // opcional
  cat: 'Owner',
};
