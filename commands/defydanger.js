const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		return interaction.reply('> ⚠️ **Defy Danger** ⚠️
		> When you *act despite an imminent threat* or *suffer a calamity,* say how you deal with it and roll. If you do it…
		> …by powering through, +Str
		> …by getting out of the way or acting fast, +Dex
		> …by enduring, +Con
		> …with quick thinking, +Int
		> …through mental fortitude, +Wis
		> …using charm and social grace, +Cha
		> 
		> • On a 10+, you do what you set out to, the threat doesn’t come to bear.
		> • On a 7–9, you stumble, hesitate, or flinch: the GM will offer you a worse outcome, hard bargain, or ugly choice.');
	},
};
