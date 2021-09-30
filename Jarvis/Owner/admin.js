const Discord = require('discord.js');

exports.run = async (jarvis, message, args) => {
  let users = await jarvis.shard.fetchClientValues('users.size');
  let guilds = await jarvis.shard.fetchClientValues('guilds.size');
  let ping = await jarvis.shard.fetchClientValues('ping');

  let emoji;
  if (ping[jarvis.shard.id] > 70) emoji = ':triumph:';
  if (ping[jarvis.shard.id] < 70) emoji = ':ok_hand:';

  const shardembed = new Discord.RichEmbed()
    .setDescription(
      `Informações de minhas **[${
        jarvis.shard.count
      }]** shards\nEste servidor faz parte da shard [\`${
        jarvis.shard.id + 1
      }\`]`,
    )
    .addField(
      `Shard [1]`,
      `Ping: \`${parseInt(ping[0])}ms\`${emoji}\nUsuários: \`${
        users[0]
      }\`\nServidores: \`${guilds[0]}\``,
      true,
    )
    .addField(
      'Shard [2]',
      `Ping: \`${parseInt(ping[1])}ms\`${emoji}\nUsuários: \`${
        users[1]
      }\`\nServidores: \`${guilds[1]}\``,
      true,
    )
    .addField(
      'Shard [3]',
      `Ping: \`${parseInt(ping[2])}ms\`${emoji}\nUsuários: \`${
        users[2]
      }\`\nServidores: \`${guilds[2]}\``,
      true,
    )
    .addField(
      'Shard [4]',
      `Ping: \`${parseInt(ping[3])}ms\`${emoji}\nUsuários: \`${
        users[3]
      }\`\nServidores: \`${guilds[3]}\``,
      true,
    )
    .setImage('https://i.imgur.com/vXRfAd6.gif')
    .setFooter(
      `Totais Usuários: [${users.reduce(
        (prev, val) => prev + val,
        0,
      )}] | Servidores: [${guilds.reduce((prev, val) => prev + val, 0)}]\n`,
    )
    .setThumbnail(jarvis.user.displayAvatarURL);
  message.channel.send(shardembed);
};
exports.help = {
  name: 'admin',
  aliases: ['adm', 'shard', 'shardinfo'],
  diretorio: 'Discord',
  desc: 'Shard INFO',
  cat: 'Discord',
};
