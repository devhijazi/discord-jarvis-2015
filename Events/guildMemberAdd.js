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

module.exports = async (jarvis, member) => {
  database.Guilds.findOne(
    {
      _id: member.guild.id,
    },
    function (err, doc) {
      if (doc) {
        if (doc.welcome) {
          if (member.guild.channels.get(doc.welcomechannel)) {
            try {
              member.guild.channels.get(doc.welcomechannel).send(
                doc.welcomemsg
                  .replace(/{member}/g, `<@${member.id}>`)
                  .replace(/{guild}/g, `${member.guild.name}`)
                  .replace(/{name}/g, `${member.user.username}`)
                  .replace(/{users}/g, `${member.guild.members.size}`),
              );
            } catch (e) {
              console.log(e);
            }
          }
        } else {
        }
        if (doc.autorole) {
          if (member.guild.roles.get(doc.autoroleid)) {
            member.guild.members
              .get(member.id)
              .addRole(doc.autoroleid)
              .catch(err => {
                doc.autorole = false;
                doc.autoroleid = 'None';
                doc.save();
              });
          } else {
            doc.autorole = false;
            doc.autoroleid = 'None';
            doc.save();
          }
        } else {
        }

        if (doc.contador) {
          if (doc.chatContador) {
            jarvis.guilds
              .get(member.guild.id)
              .channels.find(r => doc.chatContador.includes(r.id))
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
