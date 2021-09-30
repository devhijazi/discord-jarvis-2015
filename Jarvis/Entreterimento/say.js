exports.run = async (jarvis, message, args, language) => {
  if (!args[0])
    return message.channel
      .send({
        embed: {
          description: `**${message.author.username}**, ${language.say.description}`,
          color: 0x36393e,
        },
      })
      .then(msg => msg.delete(3000));

  let sayMessage = args.join(' ');

  message.channel.send(sayMessage).then(() => {
    message.delete().catch(e => {});
  });
};
exports.help = {
  name: 'say',
  aliases: ['say', 'speak', 'falar'],
  diretorio: 'Entreterimento',
  desc: 'Tell what jarvis will say',
  cat: 'Entreterimento',
};
