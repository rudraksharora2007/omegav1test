const {
  MessageEmbed
} = require(`discord.js`)
const {
  handlemsg
} = require(`${process.cwd()}/handlers/functions`);
module.exports = {
  name: `jump`,
  category: `🎶 Music`,
  aliases: [`skipto`],
  description: `Skips to a specific Track`,
  usage: `skipto <Trackindex>`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "check_dj": true,
    "previoussong": false
  },
  type: "queue",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //if no args send error plus example
    if (!args[0])
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setTitle(client.la[ls].cmds.music.jump.error1)
          .setDescription(eval(client.la[ls]["cmds"]["music"]["jump"]["variable1"]))
        ]
      });
    //if userinput is not a Number
    if (isNaN(args[0]))
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setTitle(client.la[ls].cmds.music.jump.error2)
        ]
      });
    //if the wished track is bigger then the Queue Size
    if (Number(args[0]) > player.queue.size)
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setTitle(client.la[ls].cmds.music.jump.error3)
        ]
      });
    //remove all tracks to the jumped song
    player.queue.remove(0, Number(args[0]) - 1);
    //stop the player
    player.stop()
    //Send Success Message
    return message.reply({
      embeds: [new MessageEmbed()
        .setTitle(handlemsg(client.la[ls].cmds.music.jump.title, {
          number: args[0]
        }))
        .setDescription(handlemsg(client.la[ls].cmds.music.jump.description, {
          number: args[0]
        }))
        .setColor(es.color)
      ]
    });
  }
};
/**
 * @INFO
 * Bot Coded by imperial#6966 | https://github.com/KG彡IMPΣЯIΛL/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for OmegaV2  | https://OmegaV2.dev
 * @INFO
 * Please mention Him / OmegaV2 , when using this Code!
 * @INFO
 */
