const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-take-watch')
		.setDescription('Take Watch (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> 👀 **Take Watch** 👀\n> When *you’re on watch and something approaches the camp* roll+Wis.\n> • On a 10+, you’re able to wake the camp and prepare a response, everyone in the camp takes +1 forward.\n> • On a 7–9, you react just a moment too late; your companions in camp are awake but haven’t had time to prepare. They have weapons and armor but little else.\n> • On a miss, whatever lurks outside the campfire’s light has the drop on you.');
	},
};
