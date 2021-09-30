const database = require('../Engine/database.js');

module.exports = (jarvis, guild) => {
  try {
    database.Guilds.deleteOne({ _id: guild.id });

    console.log(
      `Removido da Guild:\nInformações da Guild\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}`,
    );
    jarvis.user.setPresence({
      game: { name: `Iron Man`, type: 1, url: 'https://www.twitch.tv/jarvis' },
    });
  } catch (err) {
    console.log(`Erro no meu evendo de GuildDelete - Erro:\n${err}`);
  }
};
