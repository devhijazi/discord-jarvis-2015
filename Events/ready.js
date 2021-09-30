module.exports = async jarvis => {
  console.log(`Iniciado.`);
  let status = [
    {
      name: `Database Reseted!`,
      type: 3,
      url: 'https://www.twitch.tv/hijazi_',
    },

    { name: `Jarvis 1.1/2019`, type: 1, url: 'https://www.twitch.tv/hijazi_' },

    {
      name: `!prefix set | !help `,
      type: 1,
      url: 'https://www.twitch.tv/hijazi_',
    },

    {
      name: `Multi-Language 99% `,
      type: 1,
      url: 'https://www.twitch.tv/hijazi_',
    },
  ];
  function setStatus() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    jarvis.user.setPresence({ game: randomStatus });
  }

  setStatus();
  setInterval(() => setStatus(), 8000);
};
