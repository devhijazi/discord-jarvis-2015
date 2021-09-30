const Discord = module.require('discord.js');
var request = require('request');
var cheerio = require('cheerio');

function getStatData(location, $) {
  var selector = $('.stats-stat .value').eq(location).text();

  var stat_array = $.parseHTML(selector);

  var stat = 0;

  if (stat_array == null || stat_array.lengh == 0) {
    return -1;
  } else {
    stat = stat_array[0].data;
  }

  return stat;
}

module.exports.run = async (jarvis, message, args, language) => {
  var UR_L = 'https://csgo.tracker.network/profile/' + args[0];
  if (!args[0]) {
    return message.channel.send(
      '__:x: Please Enter a valid STEAMID64 or custom url__',
    );
  }
  request(UR_L, function (err, resp, body) {
    $ = cheerio.load(body);

    var KD = getStatData(0, $);
    if (KD == -1) {
      message.channel.send(
        '__:x: Invalid, make sure your profile is not private and you have entered a valid STEAMID64 or Custom URL!__',
      );
      return;
    }
    var WIN = getStatData(1, $);
    var HS = getStatData(4, $);
    var MONEY = getStatData(5, $);
    var SCORE = getStatData(6, $);
    var KILLS = getStatData(7, $);
    var DEATHS = getStatData(8, $);
    var MVP = getStatData(9, $);
    var BS = getStatData(13, $);
    var BD = getStatData(14, $);
    var HR = getStatData(15, $);

    var STAT = new Discord.RichEmbed()

      .setTitle(`${language.csgo.embed.title}`)
      .setURL(UR_L)
      .setColor('RANDOM')
      .addField(`**${language.csgo.embed.field1}**`, KD, true)
      .addField(`**${language.csgo.embed.field3}**`, `${WIN}%`, true)
      .addField(`**${language.csgo.embed.field4}**`, HR, true)
      .addField(`**${language.csgo.embed.field5}**`, MONEY, true)
      .addField(`**${language.csgo.embed.field6}**`, SCORE, true)
      .addField(`**${language.csgo.embed.field7}**`, KILLS, true)
      .addField(`**${language.csgo.embed.field8}**`, DEATHS, true)
      .addField(`**${language.csgo.embed.field9}**`, MVP, true)
      .addField(`**${language.csgo.embed.field10}**`, BS, true)
      .addField(`**${language.csgo.embed.field11}**`, BD, true)
      .addField(`**${language.csgo.embed.field12}**`, HS, true);

    //melhorar o embed
    message.channel.send(STAT);
  });
};

exports.help = {
  name: 'csgo',
  aliases: ['cs', 'csgo stats', 'csgo-stats'],
  diretorio: 'Entreterimento',
  desc: 'Your stats on csgo by csgo tracker ID',
  cat: 'Entreterimento',
};
