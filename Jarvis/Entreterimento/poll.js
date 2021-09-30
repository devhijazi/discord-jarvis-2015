const Discord = require('discord.js');

exports.run = async (jarvis, message, args, language) => {
  if (!message.member.roles.find('name', '@everyone')) {
    message.channel.send(`${language.poll.embed.role}`);
    return;
  }

  if (!args[0]) return message.channel.send(`${language.poll.embed.uso}`);

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`${language.poll.embed.footer}`, message.author.displayAvatarURL)
    .setThumbnail(message.author.displayAvatarURL)
    .setDescription(`**<:setabaixo:499773767120191495>\n${args.join(' ')}**`)
    .setImage('https://i.imgur.com/vXRfAd6.gif')
    .setTimestamp()
    .setTitle(`${language.poll.embed.title} ${message.author.username}`);

  let msg = await message.channel
    .send(embed)
    .then(async function (msg) {
      await msg.react('👍');
      await msg.react('👎');
      await msg.react('❓');
      message.delete({ timeout: 1000 });
    })
    .catch(function (error) {
      console.log(error);
    });
};
exports.help = {
  name: 'poll',
  aliases: ['poll', 'vote', 'votação'],
  diretorio: 'Entreterimento',
  desc: 'Start a vote or poll embed with reactions!',
  cat: 'Entreterimento',
};
