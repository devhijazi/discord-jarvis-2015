const database = require('../../Engine/database');
module.exports.run = async (jarvis, message, args, language) => {
  let razaod = args.slice(1).join(' ');

  database.Guilds.findOne(
    { _id: message.guild.id },
    function (servro, servidor) {
      if (servidor) {
        if (args[0] == 'set') {
          if (!razaod.length < 1) {
            servidor.prefix = args[1];
            servidor.save();
            message.reply(
              `<:correto:520725293569409044>${language.prefix.send2}\n<:indicadorazul:530429790084268032> \`${args[1]}\``,
            );
          } else {
            message.reply(`🤔${language.prefix.send1}`);
          }
        }
      } else {
      }
    },
  );
};
exports.help = {
  name: 'prefix',
  aliases: ['prefix', 'prefixo'], //formas De usar o cmd (qts quiser)
  diretorio: 'Database', //pra poder usar o reload por pasta
  desc: 'Change prefix of jarvis', // opcional
  cat: 'Database',
};
