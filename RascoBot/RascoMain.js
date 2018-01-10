
const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const embed = new Discord.RichEmbed()

const prefix = "s.";

client.on('ready', () => {
  client.user.setGame('Online')
  client.user.setGame('Type s.help')
  console.log("I AM ONLINE!")
  console.log(`Rasco are on - ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
});


client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "ping")){
    message.channel.send("pong!");
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'avatar')) {
    message.reply(message.author.avatarURL);
    }
 });

 client.on("message", (message) => {
   if (!message.content.startsWith(prefix)) return;
   if (message.content.startsWith(prefix + "help")) {
       message.channel.send({embed: {
         color: 3447003,
         author: {
           name: client.user.username,
           icon_url: client.user.avatarURL
         },
      title: "RASCO COMMANDS",
      description: "Type s.help for commands and s.help2 for page2 more commands are comming soon!",
      fields: [{
        name: "RASCO MUSIC",
        value: "type s.RascoMusic to get the commands | if u want Rasco to play Music u need to add RascoMusic For that!"
      },
      {
        name: "s.kick",
        value: "Kick Username # number just with admin mod and owner role some can use kick"
      },
      {
        name: "s.ban",
        value: "ban Username # number just with admin mod and owner role some can use Ban"
      },
        {
          name: "s.ping",
          value: "Rasco say's Pong! "
        },
        {
          name: "s.avatar",
          value: "get your avatar image"
        },
        {
          name: "s.roll",
          value: "Random Number between 1-6"
        },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
 }
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "RascoMusic")) {
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
     title: "RASCOMUSIC COMMANDS",
     description: "type s.RascoMusic to get the commands",
     fields: [{
       name: "s.play",
       value: "s.play you get 10 random music if u not have a youtube url | YOUTUBE IS ONLY SUPPORTED"
     },
     {
       name: "s.skip",
       value: "skips the music some are current playing"
     },
     {
       name: "s.stop",
       value: "stop the current song"
     },
       {
         name: "s.volume",
         value: "you can change the volume form 1-100 "
       },
       {
         name: "s.np",
         value: "you can see the current song some are playing"
       },
       {
         name: "s.pause",
         value: "pause the current song"
       },
       {
         name: "s.resume",
         value: "resume the current song some are playing"
       },
   ],
   timestamp: new Date(),
   footer: {
     icon_url: client.user.avatarURL,
     text: "© Example"
   }
 }
});
}
});

 client.on("message", (message) => {
   if (!message.content.startsWith(prefix)) return;
   if (message.content.startsWith(prefix + "kick")) { // creates the command kick
         if (!message.member.roles.some(r=>["Admin", "Moderatorer","mod","owner"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
         var kickedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
         if (!kickedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
         if (!kickedmember.kickable) return message.reply("I cannot kick this member!") // if the member is unkickable
         var kickreasondelete = 10 + kickedmember.user.id.length //sets the length of the kickreasondelete
         var kickreason = message.content.substring(kickreasondelete).split(" "); // deletes the first letters until it reaches the reason
         var kickreason = kickreason.join(" "); // joins the list kickreason into one line
         if (!kickreason) return message.reply("Please indicate a reason for the kick!") // if no reason
         kickedmember.kick(kickreason) //if reason, kick
             .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`)); //if error, display error
         message.reply(`${kickedmember.user.username} has been kicked by ${message.author.username} because: ${kickreason}`); // sends a message saying he was kicked
     }
 });

 client.on("message", (message) => {
   if (!message.content.startsWith(prefix)) return;
   if (message.content.startsWith(prefix + "ban")) { // creates the command kick
         if (!message.member.roles.some(r=>["Admin", "Moderatorer","mod","owner"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
         var banmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
         if (!banmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
         var bankreasondelete = 10 + banmember.user.id.length //sets the length of the kickreasondelete
         var banreason = message.content.substring(bankreasondelete).split(" "); // deletes the first letters until it reaches the reason
         var banreason = banreason.join(" "); // joins the list kickreason into one line
         if (!banreason) return message.reply("Please indicate a reason for the ban !") // if no reason
         banmember.ban(banreason) //if reason, kick
             .catch(error => message.reply(`Sorry @${message.author} I couldn't ban  because of : ${error}`)); //if error, display error
         message.send(`${banmember.user.username} has been banned by ${message.author.username} because: ${banreason}`); // sends a message saying he was kicked
     }
 });

 // Create an event listener for new guild members
 client.on('guildMemberAdd', member => {
   // Send the message to a designated channel on a server:
   const channel = member.guild.channels.find('name', 'announcements',);
   // Do nothing if the channel wasn't found on this server
   if (!channel) return;
   // Send the message, mentioning the member
   channel.send(`Welcome to the server , ${member}`);
 });

 // Create an event listener for new guild members
 client.on('guildMemberRemove', member => {
   // Send the message to a designated channel on a server:
   const channel = member.guild.channels.find('name', 'announcements');
   // Do nothing if the channel wasn't found on this server
   if (!channel) return;
   // Send the message, mentioning the member
   channel.send(`Left the server, ${member}`);
 });

// Log our bot in
client.login(settings.token);
//if (!banmember.banable) return message.reply("I cannot ban this member!") // if the member is unkickab
