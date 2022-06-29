const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('!hackandslash')
		.setDescription('Replies with Hack and Slash basic move'),
	async execute(interaction) {
		return interaction.reply('> ⚔️ **Hack and Slash** ⚔️
		> When you *attack an enemy in melee,* roll+Str.
		> • On a 10+, you deal your damage to the enemy and avoid their attack. At your option, you may choose to do +1d6 damage but expose yourself to the enemy’s attack.
		> • On a 7–9, you deal your damage to the enemy and the enemy makes an attack against you.');
	},
};

// $nomention
// > ⚔️ **Hack and Slash** ⚔️
// > When you *attack an enemy in melee,* roll+Str.
// > • On a 10+, you deal your damage to the enemy and avoid their attack. At your option, you may choose to do +1d6 damage but expose yourself to the enemy’s attack.
// > • On a 7–9, you deal your damage to the enemy and the enemy makes an attack against you.