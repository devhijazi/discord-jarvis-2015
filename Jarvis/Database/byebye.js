const database = require('../../Engine/database');

exports.run = async (client, message, args, language) => {
  database.Guilds.findOne({ _id: message.guild.id }, function (erro, servidor) {
    if (servidor) {
      if (args[0] == 'config') {
        if (args[1] == 'on') {
          servidor.byebye = true;
          servidor.save();
          console.log(servidor.byebye);
          message.reply(`${language.byebye.status} **[ON]**`);
        } else if (args[1] == 'off') {
          servidor.byebye = false;
          servidor.save();
          console.log(servidor.byebye);
          message.reply(`${language.byebye.status2} **[OFF]**`);
        }
      } else if (args[0] == 'channel') {
        let guild = client.guilds.get(message.guild.id);
        let canal =
          guild.channels.get(args[1]) ||
          guild.channels.find(a => a.name == args[1]);

        if (!args[1]) {
          message.reply(`${language.byebye.channel}`);
        } else if (!canal) {
          message.reply(`${language.byebye.channel2}`);
        } else {
          servidor.byebyechannel = canal.id;
          servidor.save();
          canal.send(`${language.byebye.setado}`);
          message.reply(`${language.byebye.setstatus}`);
        }
      } else if (args[0] == 'message') {
        let mensagem = args.slice(1).join(' ');
        servidor.byebyemsg = mensagem;
        servidor.save();
        message.channel.send(
          `${language.byebye.msgset} [\`${servidor.byebyemsg}\`]`,
        );
      }
    } else {
      var save = new database.Guilds({ _id: message.guild.id });
      servidor.save();
    }
  });
};
exports.help = {
  name: 'byebye',
  aliases: ['byebye', 'saida'],
  diretorio: 'Database',
  desc: 'Set good bye message',
  cat: 'Database',
};
