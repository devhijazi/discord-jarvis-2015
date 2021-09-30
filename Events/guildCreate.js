const database = require('../Engine/database.js');
const Discord = require('discord.js');
module.exports = (jarvis, guild) => {
  try {
    database.Guilds.findOne({ _id: guild.id }, function (servro, servidor) {
      if (!servidor) {
        var saveG = new database.Guilds({ _id: guild.id });
        saveG.save();
      }
    }).catch(e => {
      console.log('Mongoose Duplicada');
    });

    jarvis.user.setPresence({
      game: {
        name: `Infinity War`,
        type: 3,
        url: 'https://www.twitch.tv/jarvis',
      },
    });
    console.log(
      `Entrei na Guild:\nInformações da Guild\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}`,
    );
  } catch (err) {
    console.log(`Erro no meu evendo de GuildCreate - Erro:\n${err}`);
  }

  let guildCreate = guild.owner;

  let embed = new Discord.RichEmbed()
    .setAuthor(jarvis.user.username, jarvis.displayAvatarURL)
    .setThumbnail(jarvis.user.avatarURL)
    .setFooter(`Jarvis created by Gabriel HijaZi 2019`)
    .setDescription(`Hey ${guild.owner} thank you for invite-me to you server **${guild.name}**.
    I'm very happy to let me join your server in **discord** .
    As you **owner** invited me.\n\n**I'll give you some information to help you set me up!**<a:aceito:525345937317691441>.\n
    My default prefix is ​​[!], But you should change it using the command \`!prefix set\`and the new commanda \`!lang\`\n
    After you have configured your custom prefix use the **HELP** command to know all my commands\n
    \`in help, you will find commands to configure your discord server as:\`\n**custom welcome, custom byebye, autorole, ban, kick, member counter on topic , live radio system with stations worldwide and the complete music system !**\n\n
    I have over 60 different commands and every month new commands are added to my base!\n
    If you have any doubts, enter my support server and talk to my owner Hijazi **https://discordapp.com/invite/VxVMXYH**.`);
  guildCreate.send(embed);
};
/*
Evento de entrada do jarvis em discords,
mostrando ID completo
            by: Gabriel Hijazi
            Discord ID : HijaZi#6717
*/
