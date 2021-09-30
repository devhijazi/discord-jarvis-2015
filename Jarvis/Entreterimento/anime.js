const Discord = require('discord.js');
const malScraper = require('mal-scraper');

exports.run = async (jarvis, message, args, language) => {
  const search = `${args}`;

  malScraper
    .getInfoFromName(search)

    .then(data => {
      var genero = data.genres
        .map(a => a)
        .slice(1)
        .join(' ');
      const malEmbed = new Discord.RichEmbed()

        .setThumbnail(data.picture)
        .setColor('RANDOM')
        .setAuthor(`${data.japaneseTitle}` + `${data.englishTitle}`)
        .setDescription(data.synopsis)
        .addField(`**${language.anime.embed.field1}**`, data.status, true)
        .addField(`**${language.anime.embed.field2}**`, data.type, true)
        .addField(`**${language.anime.embed.field3}**`, data.episodes, true)
        .addField(`**${language.anime.embed.field4}**`, data.duration, true)
        .addField(`**${language.anime.embed.field5}**`, data.score, true)
        .addField(`**${language.anime.embed.field6}**`, data.aired, true)
        .addField(`**${language.anime.embed.field7}**`, data.rating, true)
        .addField(`**${language.anime.embed.field8}**`, data.popularity, true)
        .addField(`**${language.anime.embed.field9}**`, data.ranked, true)
        .addField(`**${language.anime.embed.field10}**`, data.members, true)
        .addField(`**${language.anime.embed.field11}**`, data.scoreStats, true)
        .addField(`**${language.anime.embed.field12}**`, `${genero}`, true)
        .addField(`**${language.anime.embed.field13}**`, `${data.rating}`, true)
        .addField('Link', `[${language.anime.embed.link}](${data.url})`, true)
        .setTimestamp()
        .setFooter(
          `${message.author.username}`,
          message.author.displayAvatarURL,
        );

      message.channel.send(malEmbed);
    })
    .catch(err => {
      const embedy = new Discord.RichEmbed()
        .setTitle(`**${language.anime.embed.title}**`)
        .setColor('36393e')
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        .addField(`${language.anime.embed.modo}`);
      message.channel.send(embedy).then(msg => msg.delete(5000));
    });
};
exports.help = {
  name: 'anime',
  aliases: ['anime', 'manga', 'anime-info'],
  diretorio: 'Entreterimento',
  desc: 'Informations about anime, title,date,ep',
  cat: 'Entreterimento',
};
