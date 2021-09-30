const Discord = require('discord.js');

exports.run = async (jarvis, message, args) => {
  console.log(
    `comando m.status ${message.guild.name} ${message.guild.id} ${message.author.tag}`,
  );

  let MembrosOnline = message.guild.members.filter(
    a => a.presence.status == 'online',
  ).size;
  let MembrosOcupado = message.guild.members.filter(
    a => a.presence.status == 'dnd',
  ).size;
  let MembrosAusente = message.guild.members.filter(
    a => a.presence.status == 'idle',
  ).size;
  let MembrosOffline = message.guild.members.filter(
    a => a.presence.status == 'offline',
  ).size;

  let statusembed = new Discord.RichEmbed()
    .setColor('36393e')
    .addField(
      `<a:squad:524646196615184385> Guild Name`,
      `**${message.guild.name}**`,
    )
    .addField(
      'Member-Status:',
      `<:indicadorazul:530429790084268032> **Online:** ${MembrosOnline}\n**<:indicadorazul:530429790084268032> idle:** ${MembrosAusente}\n**<:indicadorazul:530429790084268032> Do Not Disturb:** ${MembrosOcupado}\n**<:indicadorazul:530429790084268032> Offline:** ${MembrosOffline} `,
    );
  message.channel.send(statusembed);
};
exports.help = {
  name: 'm-status',
  aliases: ['member-status'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: 'Member status on guild', // opcional
  cat: 'Utilidade',
};
