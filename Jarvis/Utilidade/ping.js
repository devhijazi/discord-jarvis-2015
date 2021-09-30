const Discord = require('discord.js');

exports.run = async (jarvis, message, args) => {
  var ping;
  ping = parseInt(jarvis.ping);
  console.log(
    `Comando Ping ${message.guild.name} ${message.guild.id} ${message.author.tag}`,
  );
  const m = await message.channel.send(
    `**<a:loadaddbot:520708921153814533> Testing internet...**`,
  );
  const embed = new Discord.RichEmbed()
    .setFooter(`${message.author.username}`, message.author.avatarURL)
    .setTimestamp()
    .setColor('RANDOM')
    .addField(
      '**RESULT\n\n**',
      `<:indicadorazul:530429790084268032>Ping: **${Number(
        ping,
      ).toLocaleString()}ms**\n<:indicadorazul:530429790084268032>API **${
        Date.now() - message.createdTimestamp
      }ms**`,
    )
    .setThumbnail(
      `https://cdn.discordapp.com/emojis/519915181384531994.png?v=1`,
    );
  m.edit(embed);
};
exports.help = {
  name: 'ping',
  aliases: ['ping', 'latência', 'api'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: 'Ping of JARVIS', // opcional
  cat: 'Utilidade',
};
