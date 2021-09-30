const Discord = require('discord.js');

module.exports.run = async (jarvis, message, args) => {
  let bUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0]),
  );
  let sNick = args.slice(1).join(' ');
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.author.id !== 'id';
    return message.channel.send(
      '**You do not have permissions to use this command!**',
    );
  }
  if (!message.guild.me.hasPermission('ADMINISTRATOR'))
    return message.channel.send(
      `** ATTENTION ** I can not change the nick of this user !, No permission`,
    );
  if (!args[0]) {
    return message.channel.send(
      '**You should mention the user who wants to change the nickname.**',
    );
  }
  if (!args[1]) {
    return message.channel.send('**You must enter the new nick!**');
  }
  bUser.setNickname(sNick);
  message.channel.send(`**Nick successfully switched to:**${sNick}`);
};
exports.help = {
  name: 'nickname',
  aliases: ['changenick'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: 'Change nicknames hahaha', // opcional
  cat: 'Utilidade',
};
