const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-blot-out-the-sun')
		.setDescription('Blot Out The Sun (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Blot Out The Sun**\n> When you volley you may spend extra ammo before rolling. For each point of ammo spent you may choose an extra target. Roll once and apply damage to all targets.');
	},
};
