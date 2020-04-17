const Discord = require('discord.js')

function cmds_index(message, client, config, functiondate, functiontime, publics){
    const prefix = `<@!${client.user.id}>` || `<@${client.user.id}>`
    let embed = new Discord.RichEmbed
    var db = new Enmap({name:'db_'+message.guild.id})
    embed.setAuthor(client.user.username, client.user.displayAvatarURL)
    embed.setFooter(`${client.user.tag}, created by Greep#3022`)

    if (message.client.id == config.owner_id){
        const ownercmds = require('./owner/owner-index.js')
        ownercmds(message, client, config, functiondate, functiontime, publics, db, prefix, embed)
    }

    const oobe = require('./_oobe.js')
    oobe(message, client, config, functiondate, functiontime, publics, db, prefix, embed)

    const settings = require('./_settings.js')
    settings(message, client, config, functiondate, functiontime, publics, db, prefix, embed)

    const helpcmd = require('./help.js')
    helpcmd(message, client, config, functiondate, functiontime, publics, db, prefix, embed)
}

module.exports = cmds_index