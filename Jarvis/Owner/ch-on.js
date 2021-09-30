const Discord = require('discord.js');

exports.run = async (jarvis, message, args) => {
  console.log(
    `comando jarvis ${message.guild.name} ${message.guild.id} ${message.author.tag}`,
  );

  try {
    var connections = jarvis.voiceConnections;

    if (connections.size === 0) {
      message.reply(" :x: I'm currently not connected to any channel.**");
    } else {
      var embed = new Discord.RichEmbed();

      connections.forEach(a => {
        embed.setColor('#36393e');
        embed.setThumbnail(jarvis.user.displayAvatarURL);
        embed.setFooter(`Jarvis`, message.guild.iconURL);
        embed.addField(
          `Guild Name **${a.channel.guild.name}**`,
          `**Channel: \`${a.channel.name}\`**\n**Listening \`${a.channel.members.size}\` Members**`,
        );
      });

      message.channel.send(embed);
    }
  } catch (e) {
    console.log(`Erro - Comando jarvis\n${e}`);
  }
};
exports.help = {
  name: 'ch-on',
  aliases: ['channel'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: "Channel joined's", // opcional
  cat: 'Utilidade',
};
