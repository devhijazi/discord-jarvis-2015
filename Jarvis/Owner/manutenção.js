const database = require('../../Engine/database');
const Discord = require('discord.js');

exports.run = (jarvis, message, args) => {
  if (message.author.id !== '221865218840592384') {
    var yEmbed = new Discord.RichEmbed()

      .setThumbnail(
        `https://4.bp.blogspot.com/-6Xi0S1JAVYw/Wx1TRgeTphI/AAAAAAAAE9Y/_6pg2-R4Bt8Qc3CYwt_mretkhivkRwCTgCLcBGAs/w0/Models%2B-%2BMia%2BKhalifa%2B-%2BMeans%2BBusiness%2B%25285%2529.png`,
      )
      .setTitle('<a:negado:525345844938014750> **404 - NO CAN DO PAL**')
      .setColor('RANDOM')
      .addField(
        '**🚫NEED PERMISSION🚫**',
        `Only the Owner @HijaZi **BOT** can use this  **COMMAND❗❗**`,
      );
    return message.channel.send(yEmbed);
  }

  var razaou = args.slice(0).join(' ');

  if (!razaou.length < 1) {
    database.Comandos.findOne(
      { _id: args[0].toLowerCase() },
      function (cerro, comando) {
        if (comando) {
          if (comando.manutenção) {
            comando.manutenção = false;
            comando.save();
            message.reply(
              `<a:aceito:525345937317691441>Removed!.\`${args}\`The control is no longer in \`maintenance\``,
            );
          } else {
            comando.manutenção = true;
            comando.save();
            message.channel.send(
              `<a:aceito:525345937317691441>Added.\`${args}\`The command are in \`maintenance\` now`,
            );
          }
        } else {
          message.channel.send(
            `<a:negado:525345844938014750> Oops! \`${razaou}\` was not find`,
          );
        }
      },
    );
  } else {
    message.channel.send(
      '**Please tell me what  `command ` do you want to put** ***Maintenance***🤔',
    );
  }
};
exports.help = {
  name: 'manutenção',
  aliases: ['manu', 'm'], //formas De usar o cmd (qts quiser)
  diretorio: 'Owner', //pra poder usar o reload por pasta
  desc: 'Manutenção somente para Owners registrados.', // opcional
  cat: 'Owner',
};
