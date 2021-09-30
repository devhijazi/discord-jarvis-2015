const database = require('../../Engine/database');
exports.run = async (client, message, args, language) => {
  database.Guilds.findOne({ _id: message.guild.id }, function (erro, server) {
    if (server) {
      if (args[0] == 'config') {
        if (args[1] == 'on') {
          server.welcome = true;
          server.save();
          console.log(server.welcome);
          message.reply(`${language.welcome.status}**[ON]**`);
        } else if (args[1] == 'off') {
          server.welcome = false;
          server.save();
          console.log(server.welcome);
          message.reply(`${language.welcome.status2}**[OFF]**`);
        }
      } else if (args[0] == 'channel') {
        let guild = client.guilds.get(message.guild.id);
        let canal =
          guild.channels.get(args[1]) ||
          guild.channels.find(a => a.name == args[1]);

        if (!args[1]) {
          message.reply(`${language.welcome.channel}`);
        } else if (!canal) {
          message.reply(`${language.welcome.channel2}`);
        } else {
          server.welcomechannel = canal.id;
          server.save();
          canal.send(`${language.welcome.setado}`);
          message.reply(`${language.welcome.setstatus}`);
        }
      } else if (args[0] == 'message') {
        let mensagem = args.slice(1).join(' ');
        if (!args[1]) {
          message.reply(`${language.welcome.msg1}`);
        } else if (!mensagem) {
          message.reply(`${language.welcome.msgerro}`);
        } else {
          server.welcomemsg = mensagem;
          server.save();
          message.reply(
            `${language.welcome.msgset} [\`${server.welcomemsg}\`]`,
          );
        }
      }
    } else {
      var save = new database.Guilds({ _id: message.guild.id });
      save.save();
    }
  });
};
exports.help = {
  name: 'welcome',
  aliases: ['welcome', 'bemvindo'],
  diretorio: 'Database',
  desc: 'Set welcome message to a new members.',
  cat: 'Database',
};
