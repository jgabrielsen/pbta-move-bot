const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('defydanger')
		.setDescription('Replies with the Defy Danger basic move'),
	async execute(interaction) {
		return interaction.reply('> ⚠️ **Defy Danger** ⚠️\n> When you *act despite an imminent threat* or *suffer a calamity,* say how you deal with it and roll. If you do it…\n> …by powering through, +Str\n> …by getting out of the way or acting fast, +Dex\n> …by enduring, +Con\n> …with quick thinking, +Int\n> …through mental fortitude, +Wis\n> …using charm and social grace, +Cha\n> \n> • On a 10+, you do what you set out to, the threat doesn’t come to bear.\n> • On a 7–9, you stumble, hesitate, or flinch: the GM will offer you a worse outcome, hard bargain, or ugly choice.');
	},
};
