const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-death-undead-army')
		.setDescription('Death: Undead Army (Necromancer Death Move)'),
	async execute(interaction) {
		return interaction.reply('> **Death: Undead Army**\n> Vengeance. Vengeance and hate. That’s all that’s left when your vision fades to black. When you die, the earth begins to tremble. Hands of bone and decaying flesh burst forth. Hundreds of bodies dig their way out. Your canopic jars break open and your corpse collection rises to lead the horde of undead. They seek only one thing: revenge. The ones who caused your death will be torn apart. Your army will exist until your vengeance is achieved or every last corpse is destroyed. Let them know true peril, Necromancer, show them once and for all.');
	},
};
