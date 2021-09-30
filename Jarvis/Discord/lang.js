const database = require('../../Engine/database.js');
const Discord = require('discord.js');

exports.run = async (jarvis, message, args, language) => {
  database.Guilds.findOne({ _id: message.guild.id }, function (erro, servidor) {
    if (servidor) {
      if (args[0] === 'en-US') {
        if (servidor.lang === 'en-US')
          return message.channel.send(`${language.lang.send1}`);
        servidor.lang = 'en-US';
        servidor.save();
        message.channel.send(`${language.lang.sendna}`);
      } else if (args[0] === 'pt-BR') {
        if (servidor.lang === 'pt-BR')
          return message.channel.send(`${language.lang.send1}`);
        servidor.lang = 'pt-BR';
        servidor.save();
        message.channel.send(`${language.lang.sendpt}`);
      } else {
        const opembed = new Discord.RichEmbed()
          .setTitle(`${language.lang.title}`)
          .setThumbnail(
            `https://www.escolaconceito.com.br/usuario/arquivos/ingles-espanhol.png`,
          )
          .setDescription(
            `${language.lang.description}\n\n<:br:523978214284984331>**[\`Brasil/Brazil\`]**\n<:us:523978214339772426>**[\`English/Inglês\`]**`,
          )
          .addField(
            `**${language.lang.field}**`,
            `**[\`${servidor.lang}\`]**  `,
          );
        message.channel.send(opembed);
      }
    } else return;
  });
};
exports.help = {
  name: 'lang',
  aliases: ['idioma'], //formas De usar o cmd (qts quiser)
  diretorio: 'Discord', //pra poder usar o reload por pasta
  desc: 'Ping of JARVIS', // opcional
  cat: 'Discord',
};
