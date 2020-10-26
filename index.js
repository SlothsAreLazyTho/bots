const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('One grid online');
    client.user.setActivity('over the One grid community', { type: 'WATCHING'}).catch(console.error);
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    client.login('NzU2OTM2MzIzOTMxMDQ2MDAx.X2ZF4g.X7-KlO9aCLyNTeU05eMcIJg6wGs')});