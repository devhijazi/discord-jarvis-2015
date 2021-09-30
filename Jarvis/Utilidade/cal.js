const Discord = require('discord.js');
var math = require('mathjs');

module.exports.run = async (jarvis, message, args, language) => {
  let input = args.join(' ');
  if (!input) {
    message.reply(`**${language.cal.send1}**`);
    return;
  }
  const question = args.join(' ');
  let answer;
  try {
    answer = math.eval(question);
  } catch (err) {
    return message.reply(`**${language.cal.error}** ${err}`);
  }
  const embed = new Discord.RichEmbed()
    .setThumbnail(
      'https://i.pinimg.com/originals/50/da/8c/50da8c44ba216bd8d5c20992bc8ce939.gif',
    )
    .setColor('RANDOM')
    .addField(`**${language.cal.field}**`, question, true)
    .addField(`**${language.cal.field2}**`, answer);
  message.channel.send({
    embed,
  });
};
exports.help = {
  name: 'cal',
  aliases: ['calcular', 'math'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: 'Calculation', // opcional
  cat: 'Utilidade',
};
