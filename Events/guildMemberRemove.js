const database = require('../Engine/database.js');

function traduzir(_números) {
  _números = _números.toString();
  var texto = ``,
    números = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      0: 'zero',
    };
  for (let i = 0; i < _números.length; i++)
    texto += ':' + números[parseInt(_números[i])] + ':';
  return texto;
}

module.exports = (jarvis, member) => {
  database.Guilds.findOne(
    {
      _id: member.guild.id,
    },
    function (erro, servidor) {
      if (servidor) {
        if (servidor.byebye) {
          if (member.guild.channels.get(servidor.byebyechannel)) {
            member.guild.channels
              .get(servidor.byebyechannel)
              .createWebhook(member.guild.name, member.guild.iconURL)
              .then(byebye => {
                byebye.sendMessage(
                  servidor.byebyemsg
                    .replace(/{member}/g, `<@${member.id}>`)
                    .replace(/{guild}/g, `${member.guild.name}`)
                    .replace(/{name}/g, `${member.user.username}`),
                );
                setTimeout(() => {
                  byebye.delete();
                }, 2500);
              })
              .catch(err => {
                member.guild.channels.get(servidor.byebyechannel).sendMessage(
                  servidor.byebyemsg
                    .replace(/{member}/g, `<@${member.id}>`)
                    .replace(/{guild}/g, `${member.guild.name}`)
                    .replace(/{name}/g, `${member.user.username}`),
                );
              });
          } else {
            servidor.byebye = false;
            servidor.byebyechannel = 'None';
            servidor.byebyemsg = 'None';
            servidor.save();
          }
        } else {
        }

        if (servidor.contador) {
          if (servidor.chatContador) {
            member.guild.channels
              .find(r => servidor.chatContador.includes(r.id))
              .setTopic(
                `<:overall:535307054756265985> Members: <:constitution:535306096215064584> ${traduzir(
                  member.guild.memberCount,
                )} Thank you!`,
              );
          } else {
          }
        } else {
        }
      } else {
        var save = new database.Guilds({
          _id: member.guild.id,
          name: member.guild.name,
        });
        save.save();
      }
    },
  );
};
