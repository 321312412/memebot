const Discord = require('discord.js');
const got = require('got');

const bot = new Discord.Client();
bot.login('ODkxMDAzNjUyNDY1MTA2OTQ0.YU4B0A.ifpyng1QdWWsUf6cfhC7I-BHPq4n')


bot.on('message', message => {
    if (message.content === "?meme") {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://redditclear.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments

        const embed = new.Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(embed);
    })
    }
})
