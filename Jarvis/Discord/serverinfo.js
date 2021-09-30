const Discord = require('discord.js');

exports.run = async (jarvis, message, args, language) => {
  let online = message.guild.members.filter(
    member => member.user.presence.status !== 'offline',
  );
  let day = message.guild.createdAt.getDate();
  let month = 1 + message.guild.createdAt.getMonth();
  let year = message.guild.createdAt.getFullYear();
  let sicon = message.guild.iconURL;

  if (month < 10) {
    month = '0' + month;
  }

  let region = message.guild.region;

  let = region;
  if (region === 'brazil') region = ':flag_br: Brazil';
  if (region === 'eu-central') region = ':flag_eu: Central Europe';
  if (region === 'hongkong') region = ':flag_hk: Hong Kong';
  if (region === 'japan') region = ':flag_jp: Japan';
  if (region === 'russia') region = ':flag_ru: Russia';
  if (region === 'singapore') region = ':flag_sg: Singapure';
  if (region === 'southafrica') region = ':flag_za: South Africa';
  if (region === 'sydney') region = ':flag_au: Sydney';
  if (region === 'us-central') region = ':flag_us: Us Central';
  if (region === 'us-east') region = ':flag_us: Us East';
  if (region === 'us-south') region = ':flag_us: South South';
  if (region === 'us-west') region = ':flag_us: Us West';
  if (region === 'eu-west') region = ':flag_eu: Western Europe';

  var serverinfoembed = new Discord.RichEmbed()
    .setTitle(`<a:squad:524646196615184385> ${message.guild.name}`)
    .setColor('RANDOM')
    .setThumbnail(sicon)
    .addField(
      `<:constitution:535306096215064584> ${language.serverinfo.embed.field1}`,
      `**${message.guild.owner}**`,
      true,
    )
    .addField(`🗺 ${language.serverinfo.embed.field2}`, `**${region}**`, true)
    .addField(
      `<:overall:535307054756265985>${language.serverinfo.embed.field3}`,
      `**${message.guild.emojis.size}**`,
      true,
    )
    .addField(
      `<:divination:535304415943458826>${language.serverinfo.embed.field4} `,
      `**${day}/${month}/${year}**`,
      true,
    )
    .addField(
      `#⃣ ${language.serverinfo.embed.field5}`,
      '**' +
        message.guild.channels.size +
        '**' +
        `${language.serverinfo.embed.before1}`,
      true,
    )
    .addField(' 🆔', '**' + message.guild.id + '**', true)
    .addField(
      `<:pessoas:526179737547046927> ${language.serverinfo.embed.field6}`,
      '**' +
        message.guild.memberCount +
        '**' +
        `${language.serverinfo.embed.before2}`,
      true,
    )
    .addField(
      `🔵 ${language.serverinfo.embed.field7}`,
      '**' + online.size + '**' + ' Online',
      true,
    )
    .addField(
      `🏆 ${language.serverinfo.embed.field8}`,
      '**' +
        message.guild.roles.size +
        '**' +
        `${language.serverinfo.embed.before3}`,
      true,
    )
    .addField(
      `🤖 ${language.serverinfo.embed.fields}`,
      '**' +
        message.guild.members.filter(m => m.user.bot).size +
        '**' +
        ' Bots',
      true,
    )
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
    .setTimestamp();

  message.channel.send(serverinfoembed);

  message.channel.stopTyping();
};
exports.help = {
  name: 'serverinfo',
  aliases: ['sinfo', 'server', 'serverinfo'],
  diretorio: 'Discord',
  desc: 'You server informations',
  cat: 'Discord',
};
