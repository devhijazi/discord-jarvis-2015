const database = require('../../Engine/database.js');
const Discord = require('discord.js');

exports.run = async (jarvis, message, args) => {
  database.Users.findOne({ _id: message.author.id }, function (erro, usuario) {
    if (usuario) {
      if (
        message.author.id === '221865218840592384' ||
        message.author.id === '408762620770779138'
      ) {
        database.Comandos.find({}, function (cerro, doc) {
          if (doc) {
            var cmd = doc
              .filter(a => a.manutenção === true)
              .map(a => a._id)
              .join('\n');
            if (!cmd)
              return message.reply(`Nenhum **\`comando\`** em **Manutenção**`);

            var yEmbed = new Discord.RichEmbed()

              .setThumbnail(
                ` https://cdn.discordapp.com/emojis/493919635985399823.png?v=1`,
              )
              .setTitle('**JARVIS LISTA DE MANUTENÇÃO**')
              .setColor('#36393e')
              .setFooter(
                message.author.username,
                message.author.displayAvatarURL,
              )
              .setDescription(`**\`\`\` ${cmd}\`\`\`**`);
            return message.channel.send(yEmbed);
          } else {
          }
        });
      } else {
        var yEmbed = new Discord.RichEmbed()

          .setColor('#36393e')
          .setDescription(
            `${message.author}, você não tem **permissão** para executar esse **comando**`,
          );
        message.channel.send(yEmbed);
      }
    } else {
      console.log('Comando MANU-LIST, confused');
    }
  });
};

exports.help = {
  name: 'manu-list',
  aliases: ['manu-l', 'ml'], //formas De usar o cmd (qts quiser)
  diretorio: 'Owner', //pra poder usar o reload por pasta
  desc: 'Lista de comandos em manutenção somente para Owners registrados.', // opcional
  cat: 'Owner',
};
