const Discord = require('discord.js');
const database = require('../../Engine/database.js');
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
module.exports.run = (jarvis, message, args, language) => {
  database.Guilds.findOne({ _id: message.guild.id }, (erro, docs) => {
    if (docs) {
      if (!message.member.hasPermission(['ADMINISTRATOR']))
        return message.channel.send(`**${language.count.warn}**`);
      let channel = message.mentions.channels.first();
      if (!channel) {
        docs.contador = true;

        docs.chatContador.push(message.channel.id);

        docs.save();
        console.log(docs.chatContador);
        message.channel.send(
          `${language.count.send1} <a:aceito:525345937317691441>** \n\`${language.count.comando}\`\n**${language.count.canal}** <#${message.channel.id}>`,
        );

        jarvis.guilds
          .get(message.guild.id)
          .channels.get(message.channel.id)
          .setTopic(
            `<:pessoas:526179737547046927> Members: <:constitution:535306096215064584> ${traduzir(
              message.guild.memberCount,
            )} <a:estrela:526179250722701312>`,
          );
      } else if (channel) {
        docs.contador = true;

        docs.chatContador.push(channel.id);

        docs.save();
        console.log(docs.chatContador);
        message.channel.send(
          `Config: [OK!] <a:aceito:525345937317691441>** \n\`Members on Topic\`\n**defined on the channel** <#${message.channel.id}>`,
        );

        jarvis.guilds
          .get(message.guild.id)
          .channels.get(message.channel.id)
          .setTopic(
            `<:pessoas:526179737547046927> Members: <:constitution:535306096215064584> ${traduzir(
              message.guild.memberCount,
            )} <a:estrela:526179250722701312>`,
          );
      }
    } else {
      let servidor = new database.Guilds({
        _id: message.guild.id,
        contador: false,
        chatContador: 'Nenhum',
      });
      servidor.save();
      message.channel.send(`**${language.count.error}**`);
    }
    if (erro) {
      message.channel.send(`${message.author}, ${language.count.erro2}`);
    }
  });
};
exports.help = {
  name: 'count',
  aliases: ['count', 'contador', 'countch'],
  diretorio: 'Discord',
  desc: 'Set members on topic',
  cat: 'Discord',
};
