const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `darthvader`,
  category: `👀 Filter`,
  aliases: [`dv`],
  description: `Applies a Darthvader Filter`,
  usage: `darthvader`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "previoussong": false
  },
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    player.node.send({
      op: "filters",
      guildId: message.guild.id,
      equalizer: player.bands.map((gain, index) => {
        var Obj = {
          "band": 0,
          "gain": 0,
        };
        Obj.band = Number(index);
        Obj.gain = Number(gain)
        return Obj;
      }),
      timescale: {
        "speed": 0.975,
        "pitch": 0.5,
        "rate": 0.8
      },
    });
    player.set("filter", "👾 Darth Vader");
    if (!message.channel) return;
    return message.channel.send({
      embeds: [new MessageEmbed()
        .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null)

        .setTitle(eval(client.la[ls]["cmds"]["filter"]["darthvader"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["filter"]["darthvader"]["variable2"]))
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
