const database = require('../Engine/database.js');

const Discord = require('discord.js');

module.exports = async (jarvis, message) => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm')
    return message.channel.send(
      '```Do not talk to me in private\nif you need help use the commands !help\n!config\n!prefix set\n!lang```',
    );
  if (message.content) {
    //save()
  }
  database.Guilds.findOne(
    { _id: message.guild.id },
    function (servro, servidor) {
      if (servidor) {
        database.Users.findOne(
          { _id: message.author.id },
          function (erro, usuario) {
            if (usuario) {
              var prefixo;
              prefixo = servidor.prefix;
              if (message.content.indexOf(prefixo) !== 0) return;
              const args = message.content
                .slice(prefixo.length)
                .trim()
                .split(/ +/g);
              const buscCommand = args.shift();
              const command =
                jarvis.commands.get(buscCommand) ||
                jarvis.commands.find(
                  c =>
                    c.help &&
                    c.help.aliases &&
                    c.help.aliases.includes(buscCommand),
                );
              if (command) {
                database.Comandos.findOne(
                  { _id: command.help.name },
                  function (cerro, comando) {
                    if (comando) {
                      if (comando.manutenção && !usuario.owner) {
                        message.channel.send(
                          `\`${comando._id}\`unavailable for maintenance!`,
                        );
                      } else {
                        comando.usos = comando.usos + 1;

                        comando.save();

                        const language = require(`../Locales/${servidor.lang}.json`);

                        command.run(jarvis, message, args, language);
                      }
                    } else {
                      var comandoC = new database.Comandos({
                        _id: command.help.name,
                        usos: 0,
                        manutenção: false,
                      });
                      comandoC.save();
                    }
                  },
                );
              } else {
              }
            } else {
              var b = new database.Users({
                name: message.author.tag,
                _id: message.author.id,
              });
              b.save();
            }
          },
        );
      } else {
        var a = new database.Guilds({
          name: message.guild.name,
          _id: message.guild.id,
        });
        a.save();
      }

      async function save() {
        if (!servidor) {
          var a = new database.Guilds({
            name: message.guild.name,
            _id: message.guild.id,
          });
          a.save();
        }

        if (!usuario) {
          var b = new database.Users({
            name: message.author.tag,
            _id: message.author.id,
          });
          b.save();
        }
      }
    },
  );
};
