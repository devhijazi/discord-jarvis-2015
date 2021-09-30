exports.run = (jarvis, message, args) => {
  message.reply(
    `**RAM USE** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2,
    )}mb :timer:`,
  );
};
exports.help = {
  name: 'memory',
  aliases: ['ram'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: 'ram usage', // opcional
  cat: 'Utilidade',
};
