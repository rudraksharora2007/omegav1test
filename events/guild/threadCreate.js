//The Module
module.exports = async (client, thread) => {
  try {
    if (thread.joinable && !thread.joined) {
      await thread.join();
    }
  } catch (e) {
    console.log(String(e).grey)
  }
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
