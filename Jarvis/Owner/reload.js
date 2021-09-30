exports.run = async (jarvis, message, args) => {
  if (
    message.author.id == !'221865218840592384' ||
    message.author.id == !'408762620770779138'
  )
    return message.reply('Sem permissão bro ❌ ');
  if (!args[0]) return message.reply('manda o nome do comando ai po...');
  var cmd =
    jarvis.commands.get(args[0]) ||
    jarvis.commands.find(
      a => a.help && a.help.aliases && a.help.aliases.includes(args[0]),
    );
  if (!cmd) return message.reply('Achei não pow mals ai ...');
  var props = require(`../${cmd.help.diretorio}/${cmd.help.name}.js`);
  delete require.cache[
    require.resolve(`../${cmd.help.diretorio}/${cmd.help.name}.js`)
  ];
  jarvis.commands.delete(cmd.help.name);
  jarvis.commands.set(cmd.help.name, props);
  message.reply(`${cmd.help.name} recarregado... teste la que agora vai !`);
};
exports.help = {
  name: 'reload',
  aliases: ['reload', 'recarregar', 'r'], //formas De usar o cmd (qts quiser)
  diretorio: 'Owner', //pra poder usar o reload por pasta
  desc: 'Não use essa merda', // opcional
  cat: 'Owner',
};
