const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-defend')
		.setDescription('Defend (Basic Move)'),
	async execute(interaction) {
		return interaction.reply("> 🛡 **Defend** 🛡\n> When you *stand in defense of a person, item, or location* under attack, roll+Con.\n> • On a 10+, hold 3.\n> • On a 7–9, hold 1. As long as you stand in defense, when you or the thing you defend is attacked you may spend hold, 1 for 1, to choose an option:\n> — Redirect an attack from the thing you defend to yourself\n> — Halve the attack’s effect or damage\n> — Open up the attacker to an ally giving that ally +1 forward against the attacker\n> — Deal damage to the attacker equal to your level");
	},
};
