//here the event starts
const settings = require(`${process.cwd()}/botconfig/settings.json`);
module.exports = (client, rateLimitData) => {
  if (!settings["ratelimit-logs"]) return;
  console.warn(rateLimitData)
}
/**
 * @INFO
 * Bot Coded by imperial#6966 | https://discord.gg/OmegaV2
 * @INFO
 * Work for OmegaV2  | https://OmegaV2.dev
 * @INFO
 * Please mention him / OmegaV2 , when using this Code!
 * @INFO
 */
