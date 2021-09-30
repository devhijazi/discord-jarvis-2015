const database = require('../../Engine/database');
const Discord = require('discord.js');

exports.run = async (jarvis, message, args) => {
  database.Users.findOne({ _id: message.author.id }, function (erro, usuario) {
    if (usuario) {
      if (message.member.hasPermission('ADMINISTRATOR')) {
        var servers = jarvis.guilds;
        var num = 0;
        var pagina = 1;
        var totalPages = parseInt(servers.size / 10 + 1);

        var embed = new Discord.RichEmbed()

          .setDescription(
            `${servers
              .map(se => `**Nome:** *${se.name}*\n**ID:** \`${se.id}\`\n`)
              .slice(0, 10)
              .join('\n')}`,
          )
          .setFooter(
            `Page ${pagina} of ${totalPages}`,
            message.author.displayAvatarURL,
          );
        message.channel.send(embed).then(async ser => {
          if (servers.size > 10) {
            await ser.react('⬅');
            await ser.react('➡');

            const voltar = ser.createReactionCollector(
              (r, u) => r.emoji.name === '⬅' && u.id === message.author.id,
              { time: 100000 },
            );
            const proximo = ser.createReactionCollector(
              (r, u) => r.emoji.name === '➡' && u.id === message.author.id,
              { time: 100000 },
            );

            voltar.on('collect', async r => {
              if (pagina !== 1) {
                num = num - 10;
                num =
                  num.toString().length > 1
                    ? num -
                      parseInt(num.toString().slice(num.toString().length - 1))
                    : 0;
                pagina -= 1;
                var embed = new Discord.RichEmbed()

                  .addField(
                    `**Servidores:**`,
                    `${servers
                      .map(
                        se => `**Nome:** *${se.name}*\n**ID:** \`${se.id}\`\n`,
                      )
                      .slice(pagina * 10 - 10, pagina * 10)
                      .join('\n')}`,
                  )
                  .setFooter(
                    `Page ${pagina} of ${totalPages}`,
                    message.author.displayAvatarURL,
                  );
                ser.edit(embed);
                r.remove(r.users.last().id);
              } else {
                pagina = totalPages;
                num = totalPages * 10 - 20;

                var embedb = new Discord.RichEmbed()

                  .setDescription(
                    `${servers
                      .map(
                        se => `**Nome:** *${se.name}*\n**ID:** \`${se.id}\`\n`,
                      )
                      .slice(totalPages * 10 - 10, pagina * 10)
                      .join('\n')}`,
                  )
                  .setFooter(
                    `Page ${pagina} of ${totalPages}`,
                    message.author.displayAvatarURL,
                  );
                ser.edit(embedb);

                r.remove(r.users.last().id);
              }
            });

            proximo.on('collect', async r => {
              if (pagina !== totalPages) {
                num =
                  num.toString().length > 1
                    ? num -
                      parseInt(num.toString().slice(num.toString().length - 1))
                    : 0;
                num = num + 10;
                pagina += 1;

                var embedc = new Discord.RichEmbed()

                  .setDescription(
                    `${servers
                      .map(
                        se => `**Nome:** *${se.name}*\n**ID:** \`${se.id}\`\n`,
                      )
                      .slice(pagina * 10 - 10, pagina * 10)
                      .join('\n')}`,
                  )
                  .setFooter(
                    `Page ${pagina} of ${totalPages}`,
                    message.author.displayAvatarURL,
                  );

                ser.edit(embedc);

                r.remove(r.users.last().id);
              } else {
                pagina = 1;
                num = 0;

                var embedd = new Discord.RichEmbed()

                  .setDescription(
                    `${servers
                      .map(
                        se => `**Nome:** *${se.name}* \n**ID:** \`${se.id}\`\n`,
                      )
                      .slice(0, pagina * 10)
                      .join('\n')}`,
                  )
                  .setFooter(
                    `Page ${pagina} of ${totalPages}`,
                    message.author.displayAvatarURL,
                  );
                ser.edit(embedd);

                r.remove(r.users.last().id);
              }
            });
          }
        });
      } else {
        var yEmbed = new Discord.RichEmbed()

          .setThumbnail(
            `https://www.shareicon.net/data/2016/09/23/833754_edit_512x512.png`,
          )
          .setTitle(
            '<:314240199406387201:490756225575682049> **ERRO - SEM PERMISSÃO**',
          )
          .setColor('#36393e')
          .setFooter(
            `Jarvis©  - 2018 | VERIFICADO`,
            jarvis.user.displayAvatarURL,
          )
          .addField(
            'FALTA DE PERMISSÃO:',
            `Só o dono do **BOT** pode usar esse **comando**`,
          );
        return message.channel.send(yEmbed);
      }
    } else {
      console.log('Comando jarvis, confused');
    }
  });
};
exports.help = {
  name: 'guilds',
  aliases: ['servidores', 'jogando'], //formas De usar o cmd (qts quiser)
  diretorio: 'Owner', //pra poder usar o reload por pasta
  desc: 'Guilds somente para Owners registrados.', // opcional
  cat: 'Owner',
};
