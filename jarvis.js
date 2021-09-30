var owner = 'Gabriel HijaZi';
console.log(`Welcome to J.A.R.V.I.S\nDesenvolvido por: [${owner}] `);

const Discord = require('discord.js');
const config = require('./Engine/config.json');
const Enmap = require('enmap');
const fs = require('fs');

console.log(`
  TEM DIAS QUE É FODA
  TENTO LEVANTAR MAS NÃO DA

  20 20 20

`)

const jarvis = new Discord.Client({
  totalShards: 1,
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  messageCacheLifetime: 1680,
  disableEveryone: false,
  messageSweepInterval: 1680,
  disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
});

jarvis.login(config.token);

jarvis.config = config;
jarvis.commands = new Enmap();

jarvis.on('debug', debug => {
  console.log(`Shard ${jarvis.shard.id + 1}: ${debug}`);
});

/*
jarvis.login(process.env.TOKEN).catch(e => {
  console.log(`Erro em Meu Login - Erro:\n${e}`)
})
*/

//Eventos
fs.readdir('./Events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./Events/${file}`);
    let eventName = file.split('.')[0];
    jarvis.on(eventName, event.bind(null, jarvis));
  });
});

// Comandos Database
fs.readdir('./rs', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./rs/${file}`);
    let commandName = file.split('.')[0];
    jarvis.commands.set(commandName, props);
  });
});

// Comandos Database
fs.readdir('./Jarvis/Database', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./Jarvis/Database/${file}`);
    let commandName = file.split('.')[0];
    jarvis.commands.set(commandName, props);
  });
});

// Comandos Discord
fs.readdir('./Jarvis/Discord', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./Jarvis/Discord/${file}`);
    let commandName = file.split('.')[0];
    jarvis.commands.set(commandName, props);
  });
});

// Comandos Entreterimento
fs.readdir('./Jarvis/Entreterimento', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./Jarvis/Entreterimento/${file}`);
    let commandName = file.split('.')[0];
    jarvis.commands.set(commandName, props);
  });
});
//Comandos Moderação
fs.readdir('./Jarvis/Moderação', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./Jarvis/Moderação/${file}`);
    let commandName = file.split('.')[0];
    jarvis.commands.set(commandName, props);
  });
});
//Comandos Música
// fs.readdir('./Jarvis/Música', (err, files) => {
//   if (err) return console.error(err);
//   files.forEach(file => {
//     if (!file.endsWith('.js')) return;
//     let props = require(`./Jarvis/Música/${file}`);
//     let commandName = file.split('.')[0];
//     jarvis.commands.set(commandName, props);
//   });
// });
//Comandos Owner
fs.readdir('./Jarvis/Owner', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./Jarvis/Owner/${file}`);
    let commandName = file.split('.')[0];
    jarvis.commands.set(commandName, props);
  });
});

//Comandos RuneScape
// fs.readdir("./Jarvis/RuneScape", (err, files) => {
//   if (err) return console.error(err);
//   files.forEach(file => {
//     if (!file.endsWith(".js")) return;
//     let props = require(`./Jarvis/RuneScape/${file}`);
//     let commandName = file.split(".")[0];
//     jarvis.commands.set(commandName, props);
//   });
// });

//Comandos Utilidade
fs.readdir('./Jarvis/Utilidade', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./Jarvis/Utilidade/${file}`);
    let commandName = file.split('.')[0];
    jarvis.commands.set(commandName, props);
  });
});

console.log(`[J.A.R.V.I.S] > Todos estão prontos.`);

jarvis.on('error', err => {
  console.error('____erro____ ');
  console.error(err);
  console.error('____________');
});
