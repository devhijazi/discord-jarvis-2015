const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
moment.locale('en-US');
let os = require('os');
let cpuStat = require('cpu-stat');
const config = require('../../Engine/config.json');
const database = require('../../Engine/database.js');

exports.run = async (jarvis, message, args, language) => {
  var ping;
  ping = parseInt(jarvis.ping);

  jarvis.shard.fetchClientValues('guilds.size').then(servers => {
    jarvis.shard.fetchClientValues('users.size').then(users => {
      jarvis.shard.fetchClientValues('channels.size').then(channels => {
        database.Guilds.findOne(
          { _id: message.guild.id },
          function (err, servidor) {
            message.channel.startTyping();

            let duration = moment
              .duration(jarvis.uptime)
              .format('D [d], H [h], m [m], s [s]');

            cpuStat.usagePercent(function (err, percent, seconds) {
              if (err) {
                return console.log(err);
              }

              const embed = new Discord.RichEmbed()

                .setAuthor(jarvis.user.username, jarvis.user.displayAvatarURL)
                .setFooter(
                  `${message.author.username}`,
                  message.author.displayAvatarURL,
                )
                .setColor('#36393e')
                .setThumbnail(jarvis.user.displayAvatarURL)
                .setTimestamp()
                .addField(
                  `<:crown:517876732863315969> **${language.jarvis.embed.field1}** <:crown:517876732863315969>`,
                  `<:indicadorazul:530429790084268032> **\`HijaZi#6717\`**`,
                  true,
                )
                .addField(
                  `:calendar: ${language.jarvis.embed.field2}`,
                  `<:indicadorazul:530429790084268032> **\`${moment(
                    jarvis.user.createdAt,
                  ).format('LL')}\`**`,
                  true,
                )
                .addField(
                  `<:indicador:525348102345850890>**${language.jarvis.embed.field3}**`,
                  `<:indicadorazul:530429790084268032> **${servidor.prefix}**`,
                  true,
                )
                .addField(
                  `<:indicador:525348102345850890>**${language.jarvis.embed.field4}**`,
                  `<:indicadorazul:530429790084268032> **${servers.reduce(
                    (prev, val) => prev + val,
                    0,
                  )}**`,
                  true,
                )
                .addField(
                  `<:pessoas:526179737547046927>**${language.jarvis.embed.field5}**`,
                  `<:indicadorazul:530429790084268032> **${users.reduce(
                    (prev, val) => prev + val,
                    0,
                  )}**`,
                  true,
                )
                .addField(
                  `<:indicador:525348102345850890>**${language.jarvis.embed.field6}**`,
                  `<:indicadorazul:530429790084268032> **${channels.reduce(
                    (prev, val) => prev + val,
                    0,
                  )}**`,
                  true,
                )
                .addField(
                  `<:mining:535304416048316416>**${language.jarvis.embed.field7}**`,
                  `<:indicadorazul:530429790084268032>**\`${duration}\`**`,
                  true,
                )
                .addField(
                  `<:pessoas:526179737547046927>**${language.jarvis.embed.field8}**`,
                  `**<:js:521053813176664073> JavaScript [JS]**`,
                  true,
                )
                .addField(
                  `:satellite: ${language.jarvis.embed.field9}`,
                  `<:indicadorazul:530429790084268032> **${ping}ms**`,
                  true,
                )
                .addField(
                  `:floppy_disk:${language.jarvis.embed.field10}`,
                  `<:indicadorazul:530429790084268032> ${percent.toFixed(2)}%`,
                  true,
                )
                .addField(
                  `:computer: ${language.jarvis.embed.field11}`,
                  `<:indicadorazul:530429790084268032> ${os.arch()}`,
                  true,
                )
                .addField(
                  `:satellite_orbital: ${language.jarvis.embed.field12}`,
                  `<:indicadorazul:530429790084268032> **\`${config.version}\`**`,
                  true,
                )
                .addField(
                  `<:dev:532752479733940264>**${language.jarvis.embed.field13}**`,
                  `<:setinharoxa:535184503350493184>[Discord Bots Vote](https://discordbots.org/bot/${jarvis.user.id})**\n<:setinharoxa:535184503350493184>[Support Jarvis](https://discord.gg/VxVMXYH)**\n<:setinharoxa:535184503350493184>[Owner Jarvis - Social Media](https://www.instagram.com/_hiijazi/)`,
                  true,
                );

              message.channel.send(embed);
              message.channel.stopTyping();
            });
          },
        );
      });
    });
  });
};
exports.help = {
  name: 'jarvis',
  aliases: ['botinfo', 'noticeboard'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: 'Jarvis info, guilds,members,links', // opcional
  cat: 'Utilidade',
};
