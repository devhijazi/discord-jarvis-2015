const Discord = require('discord.js');

exports.run = async (jarvis, message, args, language) => {
  try {
    let mat = message.author;

    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.channel
        .send({
          embed: {
            description: `**${message.author},**${language.announce.embed.description1}`,
            color: 0x36393e,
          },
        })
        .then(msg => msg.delete(3000));
    }

    if (!message.guild.me.hasPermission('ADMINISTRATOR'))
      return message.channel.send({
        embed: {
          description: `**${mat}**,${language.announce.embed.description2}`,
          color: 0x36393e,
        },
      });

    var Anuncio = args.slice(1).join(' ');
    var idChannel = args[0];

    if (!idChannel) {
      return message.channel
        .send({
          embed: {
            description: `**${message.author},**${language.announce.embed.description3}`,
            color: 0x36393e,
          },
        })
        .then(msg => msg.delete(5000));
    }

    if (!Anuncio) {
      return message.channel
        .send({
          embed: {
            description: `**${message.author},**${language.announce.embed.description4}`,
            color: 0x36393e,
          },
        })
        .then(msg => msg.delete(5000));
    }

    const embed = new Discord.RichEmbed()

      .setTitle(`**${language.announce.embed.title}**📢`)
      .setDescription(Anuncio)
      .setFooter(
        `${language.announce.embed.footer} ${message.author.username}`,
        message.author.displayAvatarURL,
      )
      .setTimestamp(new Date())
      .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL);

    message.guild.channels
      .get(idChannel)
      .send(embed)
      .then(async msg => {
        await msg.react('❌');

        const DeleteFilter = (reaction, user) =>
          reaction.emoji.name === '❌' && user.id === message.author.id;
        const deletee = msg.createReactionCollector(DeleteFilter, {
          time: false,
        });

        deletee.on('collect', async jarvis => {
          await msg.delete();
        });
      });
  } catch (err) {
    return message.channel
      .send({
        embed: {
          description: `**${message.author},**${language.announce.embed.error}`,
          color: 0x36393e,
        },
      })
      .then(msg => msg.delete(5000));
  }

  message.delete();
};
exports.help = {
  name: 'announce',
  aliases: ['announce', 'anuncio', 'anunciar'],
  diretorio: 'Entreterimento',
  desc: 'Create a EMBED announce',
  cat: 'Entreterimento',
};
