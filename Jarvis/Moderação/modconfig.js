const database = require('../../Engine/database');

module.exports.run = async (jarvis, message, args, language) => {
  database.Guilds.findOne(
    {
      _id: message.guild.id,
    },
    function (err, doc) {
      if (doc) {
        if (args[0] === 'set') {
          let canal =
            jarvis.guilds.get(message.guild.id).channels.get(args[1]) ||
            message.mentions.channels.array()[1];
          if (!args[1]) {
            message.reply(`${language.modconfig.send}`);
          } else if (!canal) {
            message.reply(`${language.modconfig.send1}`);
          } else {
            doc.logschannel = canal.id;
            doc.save();
            message.channel.send(
              `${language.modconfig.send3} **${canal.name}**`,
            );
          }
        } else if (args[0] === 'reset') {
          doc.logschannel = 'Nenhum';
          doc.save();
          message.channel.send(`${language.modconfig.send4}`);
        }
      } else {
        var save = new database.Guilds({ _id: message.guild.id });
        save.save();
      }
    },
  );
};
exports.help = {
  name: 'modconfig',
  aliases: ['logset', 'moderationset'],
  diretorio: 'Moderação',
  desc: "Set channel's to Ban or Kick spam",
  cat: 'Moderação',
};
