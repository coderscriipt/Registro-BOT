const Discord = require("discord.js")
const { QuickDB } = require('quick.db')
const db = new QuickDB()

module.exports = {
    name: "registro", // Coloque o nome do comando
    description: "🎨 [Utilidades] Painel registro", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "canal",
            description: "selecione um canal",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true,
        },
        {
            name: "cargo1",
            description: "escolha o cargo de Homem",
            type: Discord.ApplicationCommandOptionType.Role,
            required: true,
        },
        {
            name: "cargo2",
            description: "escolha o cargo de Mulher",
            type: Discord.ApplicationCommandOptionType.Role,
            required: true,
        },
        {
            name: "cargo3",
            description: "escolha o cargo de +18",
            type: Discord.ApplicationCommandOptionType.Role,
            required: true,
        },
        {
            name: "cargo4",
            description: "escolha o cargo de -18",
            type: Discord.ApplicationCommandOptionType.Role,
            required: true,
        }
    ],

    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
            interaction.reply({ content: `Você não possui permissão para usar este comando!`, ephemeral: true })
        } else {

            let canal = interaction.options.getChannel("canal")

            let cargo1 = interaction.options.getRole("cargo1")
            await db.set(`cargo1_${interaction.guild.id}`, cargo1.id)

            let cargo2 = interaction.options.getRole("cargo2")
            await db.set(`cargo2_${interaction.guild.id}`, cargo2.id)

            let cargo3 = interaction.options.getRole("cargo3")
            await db.set(`cargo3_${interaction.guild.id}`, cargo3.id)

            let cargo4 = interaction.options.getRole("cargo4")
            await db.set(`cargo4_${interaction.guild.id}`, cargo4.id)


            const embed2 = new Discord.EmbedBuilder()
                .setColor("2f3136")
                .setDescription(`Sistema ativado com sucesso!\n\nCanal selecionado: ${canal}\nCargo Homem: ${cargo1}\nCargo Mulher: ${cargo2}\nCargo +18: ${cargo3}\nCargo -18: ${cargo4}`)

            interaction.reply({ embeds: [embed2], ephemeral: true })


            const embed = new Discord.EmbedBuilder()
                .setTitle(`${interaction.guild.name} | Sistema de Registro Automático`)
                .setColor("2f3136")
                .setDescription(`\`👋\` Por gentileza, solicitamos que o senhor ou a senhora clique nos botões apresentados abaixo a fim de efetuar o seu registro em nosso sistema.\n\n\`✨\` Agradecemos antecipadamente pela sua colaboração e permanecemos à disposição para quaisquer dúvidas ou esclarecimentos adicionais.!`)

            const botao = new Discord.ActionRowBuilder()
                .addComponents([
                    new Discord.ButtonBuilder()
                        .setCustomId('homem')
                        .setLabel("Homem")
                        .setEmoji('👨🏻')
                        .setStyle(Discord.ButtonStyle.Secondary)
                ])
                .addComponents([
                    new Discord.ButtonBuilder()
                        .setCustomId('mulher')
                        .setLabel('Mulher')
                        .setEmoji('👩🏻')
                        .setStyle(Discord.ButtonStyle.Secondary)
                ])
                .addComponents([
                    new Discord.ButtonBuilder()
                        .setCustomId('+18')
                        .setLabel('+18')
                        .setEmoji('🍺')
                        .setStyle(Discord.ButtonStyle.Secondary)
                ])
                .addComponents([
                    new Discord.ButtonBuilder()
                        .setCustomId('-18')
                        .setLabel('-18')
                        .setEmoji('🧃')
                        .setStyle(Discord.ButtonStyle.Secondary)
                ])

            canal.send({ embeds: [embed], components: [botao] })

        }



    }
}