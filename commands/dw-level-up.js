const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-level-up')
		.setDescription('Level Up (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> ⬆️ **Level Up** ⬆️\n> When you *have downtime (hours or days) and XP equal to (or greater than) your current level+7*, you can reflect on your experiences and hone your skills.\n> • Subtract your current level+7 from your XP.\n> • Increase your level by 1.\n> • Choose a new advanced move from your class.\n> • If you are the wizard, you also get to add a new spell to your spellbook.\n> • Choose one of your stats and increase it by 1 (this may change your modifier). Changing your Constitution increases your maximum and current HP. Ability scores can’t go higher than 18.');
	},
};
