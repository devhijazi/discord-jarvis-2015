var database = require('../../Engine/database.js');
exports.run = (client, message, args, language) => {
  let razaou = args.slice(0).join(' ');
  let razaod = args.slice(1).join(' ');
  database.Users.findOne(
    {
      _id: message.author.id,
    },
    function (erro, usuario) {
      if (usuario) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
          database.Guilds.findOne(
            {
              _id: message.guild.id,
            },
            function (servro, servidor) {
              if (servidor) {
                if (!razaou.length < 1) {
                  if (
                    message.content.startsWith(servidor.prefix + 'autorole set')
                  ) {
                    if (!razaod.length < 1) {
                      if (message.mentions.roles.size > 0) {
                        if (
                          message.guild.roles.get(
                            message.mentions.roles.first().id,
                          ).position <
                          message.guild.members.get(client.user.id).highestRole
                            .position
                        ) {
                          servidor.autorole = true;
                          servidor.autoroleid =
                            message.mentions.roles.first().id;
                          servidor.save();
                          message.channel.sendMessage(
                            `**<:correto:520725293569409044> ${
                              language.autorole.send1
                            }** \`${message.mentions.roles.first().name}\``,
                          );
                        } else {
                          message.channel.sendMessage(
                            `**<:errado:521528721560305682> ${language.autorole.send2}**`,
                          );
                        }
                      } else {
                        message.channel.sendMessage(
                          `**<:setinharoxa:535184503350493184> ${language.autorole.send3}**`,
                        );
                      }
                    } else {
                      message.channel.sendMessage(
                        `**<:setinharoxa:535184503350493184> ${language.autorole.send4}**`,
                      );
                    }
                  } else if (
                    message.content.startsWith(servidor.prefix + 'autorole del')
                  ) {
                    if (servidor.autorole) {
                      servidor.autorole = false;
                      servidor.autoroleid = 'Nenhum';
                      servidor.save();
                      message.channel.sendMessage(
                        `**<:correto:520725293569409044> ${language.autorole.send5}**`,
                      );
                    } else {
                      message.channel.sendMessage(
                        `**${language.autorole.send6}**`,
                      );
                    }
                  } else if (
                    message.content.startsWith(
                      servidor.prefix + 'autorole help',
                    )
                  ) {
                    message.channel.sendMessage({
                      embed: {
                        title:
                          '<:crafting:535304416056705046> Autorole <:crafting:535304416056705046>',
                        description: `**<:setinharoxa:535184503350493184> ${language.autorole.embed.description}[ok]**\n<:setinharoxa:535184503350493184>> <@&${servidor.autoroleid}>`,
                        color: 11676858,
                        timestamp: new Date(),
                        footer: {
                          icon_url: message.author.displayAvatarURL,
                          text: message.author.username,
                        },
                        thumbnail: {
                          url: 'https://images-ext-2.discordapp.net/external/5Rl7Jac79x-fcTOhvVZ_22fnGwaKRzDFhm84zTGRhVg/https/cdn.discordapp.com/emojis/497829217136803840.gif',
                        },
                      },
                    });
                  } else {
                    message.channel.sendMessage(
                      `**${language.autorole.send7}**`,
                    );
                  }
                } else {
                  message.channel.sendMessage({
                    embed: {
                      title:
                        '<:correto:520725293569409044> Autorole Tutorial <:correto:520725293569409044> ',
                      description: `**\`\`\`\n${servidor.prefix}autorole set <@rolename>\n${servidor.prefix}autorole del\n${servidor.prefix}autorole help\`\`\`**`,
                      color: 11676858,
                      timestamp: new Date(),
                      footer: {
                        icon_url: message.author.displayAvatarURL,
                        text: message.author.username,
                      },
                      thumbnail: {
                        url: 'https://cdn.firespring.com/images/4c1dcaf1-a285-4e2b-91e3-03b008296156.png',
                      },
                    },
                  });
                }
              } else {
                message.channel.sendMessage(`${language.autorole.send8}`);
              }
            },
          );
        } else {
          message.reply(
            `<:errado:521528721560305682>${language.autorole.send9}`,
          );
        }
      } else {
        message.channel.sendMessage(`${language.autorole.send10}`);
      }
    },
  );
};
exports.help = {
  name: 'autorole',
  aliases: ['autorole', 'autotag'],
  diretorio: 'Database',
  desc: 'Set a tag to add in new members automatic.',
  cat: 'Database',
};
