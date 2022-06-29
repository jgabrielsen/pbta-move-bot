const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('!volley')
		.setDescription('Replies Volley Basic Move'),
	async execute(interaction) {
		return interaction.reply('> 🏹 **Volley** 🏹
		> When you *take aim and shoot at an enemy at range,* roll+Dex.
		> • On a 10+, you have a clear shot—deal your damage.
		> • On a 7–9, choose one (whichever you choose you deal your damage):
		> — You have to move to get the shot placing you in danger as described by the GM
		> — You have to take what you can get: -1d6 damage
		> — You have to take several shots, reducing your ammo by one');
	},
};
