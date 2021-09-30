//require('http').createServer().listen(3000)
const config = require('./Engine/config.json');
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./jarvis.js', { totalShards: 4 });

manager.spawn(1).catch(e => console.error(e));
manager.on('launch', shard => console.log(`Shard ${shard.id} Carregada!`));
