const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		return interaction.reply('> 🛡 **Defend** 🛡
		> When you *stand in defense of a person, item, or location* under attack, roll+Con.
		> • On a 10+, hold 3.
		> • On a 7–9, hold 1. As long as you stand in defense, when you or the thing you defend is attacked you may spend hold, 1 for 1, to choose an option:
		> — Redirect an attack from the thing you defend to yourself
		> — Halve the attack’s effect or damage
		> — Open up the attacker to an ally giving that ally +1 forward against the attacker
		> — Deal damage to the attacker equal to your level');
	},
};
