const Discord = require('discord.js');
const database = require('../../Engine/database.js');
function clean(text) {
  if (typeof text === 'string')
    return text
      .replace(/`/g, '`' + String.fromCharCode(8203))
      .replace(/@/g, '@' + String.fromCharCode(8203));
  else return text;
}
exports.run = async (jarvis, message, args) => {
  database.Users.findOne({ _id: message.author.id }, function (erro, usuario) {
    if (usuario) {
      if (
        message.author.id === '221865218840592384' ||
        message.author.id === '408762620770779138'
      ) {
        try {
          var code = args.join(' ');
          var evaled = eval(code);

          if (!code) {
            var hhEmbed = new Discord.RichEmbed()

              .setColor('#36393e')
              .setDescription(
                `<:indicador:525348102345850890> ${message.author},insira o **código** para prosseguir com o **comando**`,
              );

            message.channel.send(hhEmbed);
          } else {
            if (typeof evaled !== 'string')
              evaled = require('util').inspect(evaled);

            var embed = new Discord.RichEmbed()

              .setColor('#36393e')
              .setThumbnail(jarvis.user.displayAvatarURL)
              .setFooter(`JARVIS© - 2019 `, jarvis.user.displayAvatarURL)
              .addField(
                '<a:aceito:525345937317691441> Código:',
                '```' + code + '```',
              )
              .addField(
                '<:rainbowarrow:527892446877581322> Resultado:',
                '```' + evaled + '```',
              );

            message.channel.send(embed).then(msg => {
              msg.react('✅');
            });
          }
        } catch (err) {
          const code = args.join(' ');
          const embed = new Discord.RichEmbed()
            .setColor('#36393e')
            .setFooter(`JARVIS©  - 2019`, jarvis.user.displayAvatarURL)
            .setThumbnail(jarvis.user.displayAvatarURL)
            .addField(
              '<a:aceito:525345937317691441>Código:',
              '```' + code + '```',
            )
            .addField(
              '<a:negado:525345844938014750>Erro:',
              '```' + `xl\n${clean(err)}` + '```',
            );
          message.channel.send(embed).then(msg => {
            msg.react('❌');
          });
        }
      } else {
        var yEmbed = new Discord.RichEmbed()

          .setColor('#36393e')
          .setDescription(
            `<a:not:526783260299362304> ${message.author}, você não tem **permissão** para executar esse **comando**`,
          );
        message.channel.send(yEmbed);
      }
    } else {
      console.log('Comando Eval - confused');
    }
  });
};
exports.help = {
  name: 'eval',
  aliases: ['eval', 'compiler', 'debug', 'e'], //formas De usar o cmd (qts quiser)
  diretorio: 'Owner', //pra poder usar o reload por pasta
  desc: 'Eval somente para Owners registrados.', // opcional
  cat: 'Owner',
};
