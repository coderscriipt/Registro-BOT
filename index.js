const Discord = require('discord.js')
const { QuickDB } = require('quick.db')
const db = new QuickDB()
const ms = require('ms')
const { ActivityType } = require('discord.js');
const config = require("./config.json")
const client = new Discord.Client({ 
  intents: [ Discord.GatewayIntentBits.Guilds]});

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){
      const cmd = client.slashCommands.get(interaction.commandName);
      if (!cmd) return interaction.reply(`Error`);
      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
      cmd.run(client, interaction)

   }
})

client.on('ready', () => {
    console.log(`🔥 Estou online em ${client.user.username}!`);
    client.user.setPresence({
      activities: [{ name: `Sou um Bot feito para Bater Ponto!.`, type: ActivityType.Playing }],
      status: 'idle',
    });
})  
  
client.slashCommands = new Discord.Collection()
require('./handler')(client)
client.login(config.token)

client.on('interactionCreate', async (interaction) => {
	if (interaction.isButton()){
		if (interaction.customId ==='homem'){
			interaction.reply({
				ephemeral: true,
				embeds: [
					new Discord.EmbedBuilder()
					.setTitle('Verificando!')
					.setColor("2f3136")
					.setDescription(`<a:loading:1091388349991882792> | Reconhecendo o cargo \`Homem\` para verificar...`)
					.setFooter({ text: `Recebendo informações...` })
					.setTimestamp()
				]
			})
			
			setTimeout(()=>{
				interaction.editReply({
					ephemeral: true,
					embeds: [
						new Discord.EmbedBuilder()
						.setTitle('Verificando!')
						.setColor("2f3136")
						.setDescription(`<a:loading:1091388349991882792> | Procurando o cargo para adicionar...`)
						.setFooter({ text: `Carregando...` })
						.setTimestamp()
					]
				})
			}, 2000)
			setTimeout(()=>{
				interaction.editReply({
					ephemeral: true,
					embeds:[
						new Discord.EmbedBuilder()
						.setTitle('Sucesso!')
						.setColor("Green")
						.setDescription(`<:NB_IconDynoSuccess:1086006680225058866> | Sucesso, cargo \`Homem\` reconhecido e adicionado!`)
						.setFooter({ text: `Carregamento concluido!` })
						.setTimestamp()
					]
				})
				
			}, 5000)

			let cargo_id1 = await db.get(`cargo1_${interaction.guild.id}`)
			let cargo1 = interaction.guild.roles.cache.get(cargo_id1)
			if (!cargo1) return
			interaction.member.roles.add(cargo_id1)
			
		}
	}
})

client.on("interactionCreate", async (interaction) => {
	if (interaction.isButton()){
		if (interaction.customId === 'mulher'){

			interaction.reply({
				ephemeral: true,
				embeds: [
					new Discord.EmbedBuilder()
					.setTitle('Verificando!')
					.setColor("2f3136")
					.setDescription(`<a:loading:1091388349991882792> | Reconhecendo o cargo \`Mulher\` para verificar...`)
					.setFooter({ text: `Recebendo informações...` })
					.setTimestamp()
				]
			})
			setTimeout(()=>{
				interaction.editReply({
					ephemeral: true,
					embeds: [
						new Discord.EmbedBuilder()
						.setTitle('Verificando!')
						.setColor("2f3136")
						.setDescription(`<a:loading:1091388349991882792> | Procurando o cargo para adicionar...`)
						.setFooter({ text: `Carregando...` })
						.setTimestamp()
					]
				})
			}, 2000)
			setTimeout(()=>{
				interaction.editReply({
					ephemeral: true,
					embeds:[
						new Discord.EmbedBuilder()
						.setTitle('Sucesso!')
						.setColor("Green")
						.setDescription(`<:NB_IconDynoSuccess:1086006680225058866> | Sucesso, cargo \`Mulher\` reconhecido e adicionado!`)
						.setFooter({ text: `Carregamento concluido!` })
						.setTimestamp()
					]
				})
				
			}, 5000)

			let cargo_id2 = await db.get(`cargo2_${interaction.guild.id}`)
			let cargo2 = interaction.guild.roles.cache.get(cargo_id2)
			if (!cargo2) return
			interaction.member.roles.add(cargo_id2)

		}
	}
})

client.on('interactionCreate', async (interaction) => {
	if (interaction.isButton()){
		if (interaction.customId ==='+18'){


			interaction.reply({
				ephemeral: true,
				embeds: [
					new Discord.EmbedBuilder()
					.setTitle('Verificando!')
					.setColor("2f3136")
					.setDescription(`<a:loading:1091388349991882792> | Reconhecendo o cargo \`+18\` para verificar...`)
					.setFooter({ text: `Recebendo informações...` })
					.setTimestamp()
				]
			})
			setTimeout(()=>{
				interaction.editReply({
					ephemeral: true,
					embeds: [
						new Discord.EmbedBuilder()
						.setTitle('Verificando!')
						.setColor("2f3136")
						.setDescription(`<a:loading:1091388349991882792> | Procurando o cargo para adicionar...`)
						.setFooter({ text: `Carregando...` })
						.setTimestamp()
					]
				})
			}, 2000)
			setTimeout(()=>{
				interaction.editReply({
					ephemeral: true,
					embeds:[
						new Discord.EmbedBuilder()
						.setTitle('Sucesso!')
						.setColor("Green")
						.setDescription(`<:NB_IconDynoSuccess:1086006680225058866> | Sucesso, cargo \`+18\` reconhecido e adicionado!`)
						.setFooter({ text: `Carregamento concluido!` })
						.setTimestamp()
					]
				})
				
			}, 5000)

			let cargo_id3 = await db.get(`cargo3_${interaction.guild.id}`)
			let cargo3 = interaction.guild.roles.cache.get(cargo_id3)
			if (!cargo3) return
			interaction.member.roles.add(cargo_id3)

		}
	}
})

client.on('interactionCreate', async (interaction) => {
	if (interaction.isButton()){
		if (interaction.customId ==='-18'){

			interaction.reply({
				ephemeral: true,
				embeds: [
					new Discord.EmbedBuilder()
					.setTitle('Verificando!')
					.setColor("2f3136")
					.setDescription(`<a:loading:1091388349991882792> | Reconhecendo o cargo \`-18\` para verificar...`)
					.setFooter({ text: `Recebendo informações...` })
					.setTimestamp()
				]
			})
			setTimeout(()=>{
				interaction.editReply({
					ephemeral: true,
					embeds: [
						new Discord.EmbedBuilder()
						.setTitle('Verificando!')
						.setColor("2f3136")
						.setDescription(`<a:loading:1091388349991882792> | Procurando o cargo para adicionar...`)
						.setFooter({ text: `Carregando...` })
						.setTimestamp()
					]
				})
			}, 2000)
			setTimeout(()=>{
				interaction.editReply({
					ephemeral: true,
					embeds:[
						new Discord.EmbedBuilder()
						.setTitle('Sucesso!')
						.setColor("2f3136")
						.setDescription(`<:NB_IconDynoSuccess:1086006680225058866> | Sucesso, cargo \`-18\` reconhecido e adicionado!`)
						.setFooter({ text: `Carregamento concluido!` })
						.setTimestamp()
					]
				})
				
			}, 5000)

			let cargo_id4 = await db.get(`cargo4_${interaction.guild.id}`)
			let cargo4 = interaction.guild.roles.cache.get(cargo_id4)
			if (!cargo4) return
			interaction.member.roles.add(cargo_id4)

		}
	}
})