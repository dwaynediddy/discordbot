const Discord = require('discord.js')
const fetch = require('node-fetch')
const client = new 
Discord.Client()

const nextBoss = ['what boss should i do next?']

const bosses = [
  'Barrows',
  "Calisto",
  "Commander Zilyana",
  'Corporeal Beast',
  'Chambers of Xeric',
  "Dks",
  'The Gauntlet',
  "General Graardor",
  "Giant Mole",
  'Kalphite Queen',
  'King Black Dragon',
  "Kree'arra",
  "K'ril Tsutsaroth",
  'The Nightmare',
  'Rabbit (Prifddinas)',
  'Sarachnis',
  "Scorpia",
  "Slayer Boss",
  'TzTok-Jad',
  'TzKal-Zuk(lol)',
  'Theatre of Blood',
  'Venenatis',
  "Vetion",
  "Vorkath",
  "Wintertodt",
  "Zalcano",
  "Zulrah",
]

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!')
})

client.on('message', msg => {
  if (msg.author.bot) return
  
  if (msg.content === "spoon") {
    msg.reply('spoon you say? Jimmy or Scooter?')
  }

  if (nextBoss.some(word => msg.content.includes(word))) {
    const boss = bosses[Math.floor(Math.random() * bosses.length)]
    msg.reply(boss)
  }
})

client.login(process.env.TOKEN)