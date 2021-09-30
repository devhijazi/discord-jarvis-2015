const Discord = require('discord.js');
exports.run = async (jarvis, message, args) => {
  try {
    //let authorDMChannel = await message.author.createDM(); ENVIAR O COMANDO NO PRIVADO DAS PESSOAS
    const embed1 = new Discord.RichEmbed()

      .setColor('RANDOM')
      .setTitle(`**WELCOME TO JARVIS©(HELP BETA)1.0**`)
      .setThumbnail(message.author.avatarURL)
      .addField(
        '**<:indicadorazul:530429790084268032>Category 00 **',
        '**📖 Important before use ↔ `READ ME`**',
        true,
      )
      .addField(
        '**<:indicadorazul:530429790084268032>Category 01**',
        '**🏣 Constituted by ↔ `MODERATION`**',
        true,
      )
      .addField(
        '**<:indicadorazul:530429790084268032>Category 02**',
        '**🔧 Constituted by ↔ `CUSTOM COMMANDS (DB)`**',
        true,
      )
      .addField(
        '**<:indicadorazul:530429790084268032>Category 03**',
        '**🤣 Constituted by ↔ `FUNNY`**',
        true,
      )
      .addField(
        '**<:indicadorazul:530429790084268032>Category 04**',
        '**🛠 Constituted by ↔ `USEFUL`**',
        true,
      )
      .addField(
        '**<:indicadorazul:530429790084268032>Category 05**',
        '**🔩 Constituted by ↔ `ABOUT JARVIS`**',
        true,
      )
      .addField(
        '**<:indicadorazul:530429790084268032>Category 06**',
        '**🎵 Constituted by ↔ `MUSIC COMMANDS`**',
        true,
      )
      .setDescription(
        "*This is the help panel of `Jarvis ©`, to proceed let's make some settings*\n\n→Use the `!setprefix on <prefix>` command to set a prefix of your will\n\n→After setting your prefix use the `links` command\n\n→important before you start using `jarvis` click on the first emoji called `READ ME`,and read about the bot.\n\n‼ There are `07` categories, the most important being the `00` category for the `READ ME`",
      )
      .setImage('https://i.imgur.com/vXRfAd6.gif');
    await message.channel.send(embed1).then(async msg => {
      await msg.react('📖');
      await msg.react('🏣');
      await msg.react('🔧');
      await msg.react('🤣');
      await msg.react('🛠');
      await msg.react('🔩');
      await msg.react('🎵');
      await msg.react('🎮');

      const admfilter = (reaction, user) =>
        reaction.emoji.name === '🏣' && user.id === message.author.id;
      const adm = msg.createReactionCollector(admfilter, { time: 100000000 }); //tempo que as reações vão funcionar para trocar de pagina

      adm.on('collect', jarvis1 => {
        // Moderation
        const embed2 = new Discord.RichEmbed()
          .setAuthor('MODERATION', message.author.displayAvatarURL)
          .setColor('RANDOM')
          .setThumbnail(
            'https://images-ext-2.discordapp.net/external/EDeTJvLdNs5pQIJyuavmedO0T1eVN-xFBHma-njR-bU/https/cdn.discordapp.com/emojis/497978369095499797.png',
          )
          .addField(
            '** REQUIREMENTS**',
            '<:humanos:497830454590963742>**Configuration `prefix + logconfig set`**\n**<:humanos:497830454590963742> Channel `reports`\n<:humanos:497830454590963742> Admin/Mod `PERMISSIONS`**',
          )
          .addField(
            '**BAN**',
            'This command should be used only by the Server Owner `type the command name mention the user and say the reason` \nExample →`!ban @david Toxic`',
          )
          .addField(
            '**KICK**',
            'This command can be used by members of the Staff `type the name of the command mention the user and say the reason` \nExample →`!kick @ joão spam link`',
          )
          .addField(
            '**REPORT**',
            'This command can be used to deny members `type the command name mention the user and say the reason` \nExample →`!report @Stock Toxic`',
          )
          .addField(
            '**MUTE**',
            'This command can be used to mute members `type the command name mention the user and say the reason` \nExample →`mute @Stock <reason>`',
          )
          .addField(
            '**UNMUTE**',
            'This command can be used to unmute members `type the command name mention the user.` \nExample →`unmute @Stock`',
          )
          .setDescription(
            '**Hello**, user, welcome to the list of my **MODERATION** commands of your discord. The commands are listed below. \n \nThe prefix used is according to the set previously if you have not configured a prefix so the default is **(!)**\n\n Commands from this tab : `ban | report | kick`',
          );
        msg.edit(embed2);
        jarvis1.remove(jarvis1.users.last().id);
      });

      const funfilter = (reaction, user) =>
        reaction.emoji.name === '🤣' && user.id === message.author.id; // comedia
      const fun = msg.createReactionCollector(funfilter, { time: 100000000 }); //tempo que as reações vão funcionar para trocar de pagina

      fun.on('collect', jarvis2 => {
        //Funny
        const embed3 = new Discord.RichEmbed()
          .setAuthor('FUNNY', message.author.displayAvatarURL)
          .setColor('RANDOM')
          .setThumbnail(
            'https://image.flaticon.com/icons/png/512/356/356782.png',
          )
          .setImage('http://www.icondental.com.sg/images/maintenance.png');
        /*
                .addField('** REQUIREMENTS**','<:porra:497830754991210496> **NONE**')
                .addField('**COIN**','Tails or Heads who wins? you or Jarvis\nExample → `prefix + coin`')
                .addField('**HUG**','Do not be afraid to hug someone \nExample → `prefix + hug @ joão`')
                .addField('**SMOKE**','Smoke weed everyday\nExample → `prefix + smoke`')
                .addField('**JOKE**','BAD JOKES\nExample → `prefix + joke`')
                .addField('**CPF**','generates a false cpf to use in registers \nExample → `prefix + cpf generate / validate`')
                .addField('**8BALL**','Looking for answers to your questions? jarvis responds\nExample → `prefix + 8ball question')
                .addField('**:gay_pride_flag: GAY**','Want to know your level of gay today?\nExample → `Prefix + gay`')
                .addField('**CAT**','Cat photos\nExample → `Prefix + cat`')
                .addField('**DOG**','Dog photos\nExample → `Prefix + dog`')
                .addField('** RPS**','rock Paper Scissors\nExample → `Prefix + rps rock`')
                .setDescription('Hello, user welcome to the list of funny `FUNNY` commands\n\nThe Prefix used is according to the set previously if you have not configured any Prefix then the default is ** (!) **\n\nCommands on this page: `8ball | hug | cat | coin | cpf | dog | gay | joke | rps`')
                */
        msg.edit(embed3);
        jarvis2.remove(jarvis2.users.last().id);
      });

      const utilfilter = (reaction, user) =>
        reaction.emoji.name === '🛠' && user.id === message.author.id; // comedia
      const util = msg.createReactionCollector(utilfilter, { time: 100000000 }); //tempo que as reações vão funcionar para trocar de pagina

      util.on('collect', jarvis3 => {
        //utilities
        const embed4 = new Discord.RichEmbed()
          .setAuthor('USEFUL', message.author.displayAvatarURL)
          .setColor('RANDOM')
          .setThumbnail(
            'https://image.flaticon.com/icons/png/512/148/148908.png',
          )
          .addField(
            '** REQUIREMENTS**',
            '<:humanos:497830454590963742>**Some commands may require `PERMISSIONS`**',
          )
          .addField(
            '**CAL**',
            'Calculate mathematical expressions\nExample → `Prefix + cal 2+2/2*2`',
          )
          .addField(
            '**WEATHER**',
            'Know the temperature of your city or other in real time\nExample → `Prefix + weather São Paulo`',
          )
          .addField('**PING**', 'ping\nExample → `Prefix + ping`')
          .addField(
            '**SAY**',
            'The bot speak somthing\nExample → `Prefix + say`',
          )
          .addField('**CPU**', 'HOST information\nExample → `Prefix + cpu')
          .addField(
            '**CLEAR**',
            'clears `100` chat messages\nExample → `Prefix + clear 50`',
          )
          .addField(
            '**AVATAR**',
            'Avatar picture\nExample → `Prefix + avatar @chapéuzinho`',
          )
          .addField(
            '**POLL**',
            'Start a poll\nExample → `Prefix + poll question`',
          )
          .addField(
            '**EMOJI**',
            'this command is necessary to use in the discord that jarvis is to pick up exports and emojis informationl\nExample → `Prefix + emoji <emojiname>`',
          )
          .setDescription(
            'Hello, user welcome to the list of useful commands `UTILITIES` \n\nThe Prefix used is according to the set previously if you have not configured any Prefix then the default is ** (!) ** \n\nCommands of this tab :`cal | clear | cpu | help | say | avatar | ping | poll | emoji`',
          );
        msg.edit(embed4);
        jarvis3.remove(jarvis3.users.last().id);
      });

      const gamesfilter = (reaction, user) =>
        reaction.emoji.name === '🎮' && user.id === message.author.id; // comedia
      const games = msg.createReactionCollector(gamesfilter, {
        time: 100000000,
      }); //tempo que as reações vão funcionar para trocar de pagina

      games.on('collect', jarvis4 => {
        //
        const embed5 = new Discord.RichEmbed()
          .setAuthor('GAMES', message.author.displayAvatarURL)
          .setColor('RANDOM')
          .setThumbnail('https://i.imgur.com/9wkP78R.png')
          .addField(
            '** REQUIREMENTS**',
            '<:humanos:497830454590963742>** Your STEAM Privacy Settings must be in**`PUBLIC`',
          )
          .addField(
            '**CSGO**',
            'Information about your profile on Counter strike.\nExample → `Prefix + csgo STEAM URL ID`',
          )
          .addField(
            '**ANIME**',
            'Information about Animes episodes titles etc...\nExample → `anime Naruto Shippuden`',
          )
          .setDescription(
            'Hello, user welcome to the `GAMES` game command list \n\nThe Prefix used is according to the set previously if you have not configured any Prefix then the default is ** (!) ** \n\nCommands of this tab :`csgo`',
          );
        msg.edit(embed5);
        jarvis4.remove(jarvis4.users.last().id);
      });

      const aboutfilter = (reaction, user) =>
        reaction.emoji.name === '🔩' && user.id === message.author.id; // comedia
      const about = msg.createReactionCollector(aboutfilter, {
        time: 100000000,
      }); //tempo que as reações vão funcionar para trocar de pagina

      about.on('collect', jarvis5 => {
        //
        const embed6 = new Discord.RichEmbed()
          .setAuthor('DISCORD CFG', message.author.displayAvatarURL)
          .setColor('RANDOM')
          .setThumbnail(
            'https://vignette.wikia.nocookie.net/justdance/images/d/d0/Discord_logo.png/revision/latest?cb=20180704083347',
          )
          .addField(
            '** REQUIREMENTS**',
            '<:humanos:497830454590963742>**ADMIN PERMISSION**',
          )
          .addField(
            '**JARVIS**',
            'In this command you will find general information about `Jarvis`',
          )
          .addField(
            '**USERINFO**',
            'Data about each user you mention\nExample → `userinfo @fred',
          )
          .addField(
            '**SERVERINFO**',
            'Data about your `DISCORD` Guild\nExample → `serverinfo`.',
          )
          .addField('**LINKS**', 'Important links to Jarvis.')
          .addField(
            '**NICKNAME**',
            'Change name or nickname at any time`IMPOSSIBLE` with `OWNERS`\nExample → `nickname @joão João The noob`.',
          )
          .addField(
            '**ADDROLE**',
            'Only for `ADMIN` use to promote USERS\nExample → `addrole @maria Moderador`\n NOTE: Do not mention Role use only her name',
          )
          .addField(
            '**ROLEDELETE**',
            'Only for `ADMIN`use to demote USERS\nExample → `roledelete @maria Moderador`\nNOTE: Do not mention Role use only her name',
          )
          .addField(
            '**ROLEINFO**',
            'Take `ROLE` information on your discord\nExample → `roleinfo @ADMIN`',
          )
          .addField(
            '**ANNOUNCE**',
            'Make a statement about updates\nExample → `announce <channelID> message`',
          )
          .addField(
            '**MEMBERS ON TOPIC**',
            'Set count members on Topic of channel\nExample → `prefix + count`',
          )
          .setDescription(
            'Hello, user welcome to the list of commands DISCORD `DISCORD CFG`\n\nThe Prefix used is according to the set previously if you have not configured any Prefix then the default is ** (!) **\n\nCommands of this tab : `addrole | announce | nickname | links | userinfo | serverinfo | jarvis | roledelete |`',
          );
        msg.edit(embed6);
        jarvis5.remove(jarvis5.users.last().id);
      });

      const musicfilter = (reaction, user) =>
        reaction.emoji.name === '🎵' && user.id === message.author.id; // comedia
      const music = msg.createReactionCollector(musicfilter, {
        time: 100000000,
      }); //tempo que as reações vão funcionar para trocar de pagina

      music.on('collect', jarvis6 => {
        //
        const embed7 = new Discord.RichEmbed()
          .setAuthor(
            ' RELEASED MUSIC/LIVE RADIO',
            message.author.displayAvatarURL,
          )
          .setColor('RANDOM')
          .setThumbnail(
            'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c545.png',
          )
          .addField('** REQUIREMENTS**', '<:porra:497830754991210496> **NONE**')
          .addField(
            '**SPOTIFY**',
            'Information about the music you or another user is listening to\nExample → `spotify @lobomau`',
          )
          .addField(
            '**PLAY**',
            'Example → `Play [Song Name]`\nAfter listing just enter the desired number',
          )
          .addField('**SKIP**', 'Skip Song')
          .addField('**NP**', 'Currently playing')
          .addField('**STOP**', 'STOP Song and Jarvis left of channel.')
          .addField('**PAUSE**', '´Pause Song')
          .addField('**RESUME**', 'Resume')
          .addField('**LEAVE**', 'Kick Jarvis of channel')
          .addBlankField()
          .addField('**RADIO**', 'Radio commands NEW COMMAND ')
          .addField(
            '**RADIO LIST**',
            'Show to you the list with ID and Names of stations',
          )
          .addField('**RADIO PLAY**', 'Play the station selected by you.')
          .setDescription(
            'Hello, user welcome to the list of MUSIC commands `MUSIC/RADIO` \n\nThe Prefix used is according to the set previously if you have not configured any Prefix then the default is ** (!) **\n\nCommands of this tab `spotify | play | pause | resume | stop | leave | np | radio | radio list | radio play`',
          );
        msg.edit(embed7);
        jarvis6.remove(jarvis6.users.last().id);
      });

      const readfilter = (reaction, user) =>
        reaction.emoji.name === '📖' && user.id === message.author.id;
      const read = msg.createReactionCollector(readfilter, { time: 100000000 }); //tempo que as reações vão funcionar para trocar de pagina

      read.on('collect', jarvis7 => {
        // Moderation
        const embed8 = new Discord.RichEmbed()
          .setAuthor(
            'USER MANUAL/INSTRUCTIONS',
            message.author.displayAvatarURL,
          )
          .setColor('RANDOM')
          .setImage('https://i.imgur.com/vXRfAd6.gif')
          .setDescription(
            '**Hello my name is Jarvis, I am a BOT created for discord in the language of `JavaScript`, my developer is called `HijaZi` and is studying Technology at a Federal Institution `UFMS`**.\n\n**I am a bot with multiple features of which are: ** `DATABASE CUSTOM CMD`,`MODERATION`,`FUN`,`DISCORD CFG`,`UTILITY`,`GAMES`\n\n**Some information, I have in my `SOURCE` the MONGOOSE database system my commands should be used 2x (times) (**NOTE:** This process is only necessary `1x`(time)) for them to work, registry issues**\n\n**Have patience `Jarvis` is a totally free project focused on learning and facilitate the creation of new servers in the discord all the command tabs will have explanations of how to use the commands below will be placed some more important links for me, thanks for using me.`JARVIS ©`**',
          );
        msg.edit(embed8);
        jarvis7.remove(jarvis7.users.last().id);
      });

      const customfilter = (reaction, user) =>
        reaction.emoji.name === '🔧' && user.id === message.author.id;
      const custom = msg.createReactionCollector(customfilter, {
        time: 100000000,
      }); //tempo que as reações vão funcionar para trocar de pagina

      custom.on('collect', jarvis8 => {
        // Moderation
        const embed9 = new Discord.RichEmbed()
          .setAuthor(
            'CUSTOM COMMANDS(DATABASE)',
            message.author.displayAvatarURL,
          )
          .setColor('RANDOM')
          .setThumbnail(
            'https://4erff29jo03b8uhp4b94vxhq-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/caspio-features-illustr_cloud-data_3_2x.png',
          )
          .addField(
            '** REQUIREMENTS**',
            '<:humanos:497830454590963742>**ADMIN PERMISSION**',
          )
          .addField(
            '**WELCOME**',
            'Hello, we came to your Welcome server settings. This means that you can create a welcome message for each new user! and how to use?\n\n**Step 1**\n`welcome config on`\ntype it `welcome config on` 2 times soon after will appear a message ***welcome on***\n**Step 2**\n`welcome channel`\nType it `welcome channel [Here paste the ID or enter the name of the welcome channel]`Jarvis will send you a test message if this message appears all right proceed!\n**Step 3**\n`welcome message`\nEnter a welcome message\nExample : `welcome message Hello [member] welcome to [guild] have fun ... etc`\nOnce this is done your welcome is set.\n\n',
          )
          .addField(
            '**BYEBYE**',
            'Hello, we came to your byebye server settings. This means that you can create a byebye message for each new user! and how to use?\n\n**Step 1**\n`byebye config on`\ntype it `byebye config on` 2 times soon after will appear a message ***byebye on***\n**Step 2**\n`byebye channel`\nType it `byebye channel [Here paste the ID or enter the name of the byebye channel]`Jarvis will send you a test message if this message appears all right proceed!\n**Step 3**\n`byebye message`\nEnter a byebye message\nExample : `byebye message [member] left [guild] GOOD BYE.`\nOnce this is done your byebye is set.\n\n',
          )
          .addField(
            '**SETPREFIX**',
            'Hello, use this command to avoid interfering with other bots! with `!setprefix on` can you change my Prefix',
          )
          .addField(
            '**MODERATION CONFIG**',
            'Hello, use this command to config `logs`channel  with `logconfig set` to define any channel of moderation',
          )
          .setDescription(
            'Hello, user welcome to the list of commands CUSTOMIZABLE `DATABASE` \nGood these are my new commands in DATABASE I will explain how to use them in their descriptions, pay close attention \n\nThe Prefix used is according to the set previously if you do not has configured no Prefix so the default is ** (!) ** \n\nCommands of this tab :`welcome | byebye | setprefix |`',
          );

        msg.edit(embed9);
        jarvis8.remove(jarvis8.users.last().id);
      });
    });

    /*
        avisa que o bot mandou os comandos no dm 
                         message.channel.send("**➣➣I sent my commands to you in private**").catch(e => {
                           console.log.error(e);
                         });
                         */
  } catch (e) {
    if (e.code === 50007) {
    } else {
      console.log.error(e);
    }
  }
};
exports.help = {
  name: 'help',
  aliases: ['ajuda', 'needhelp'], //formas De usar o cmd (qts quiser)
  diretorio: 'Utilidade', //pra poder usar o reload por pasta
  desc: 'Help Panel', // opcional
  cat: 'Utilidade',
};
