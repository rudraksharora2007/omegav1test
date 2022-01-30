const playermanager = require(`${process.cwd()}/handlers/playermanager`);
module.exports = {
  name: `addprevious`,
  category: `🎶 Music`,
  aliases: [`addp`, `addpre`, `addprevius`, `addprevios`],
  description: `Adds the previous song to the Queue again!`,
  usage: `addprevious`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "previoussong": true
  },
  type: "queue",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //adds/plays it
    playermanager(client, message, Array(player.queue.previous.uri), player.queue.previous.uri.includes(`soundcloud`) ? `song:soundcloud` : `song:raw`);
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
