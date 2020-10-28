const Discord = require('discord.js')
const { footer } = require('../../config.json')

const createEmbed = (data) => {
  const reply = new Discord.MessageEmbed({
    timestamp: data.timestamp,
    title: `${data.name} - ${data.code}`,
    description: data.description,
    type: 'link',
    url: 'https://star-citizen.wiki/' + encodeURIComponent(data.name),
    footer
  })

  reply
    .addField('Bekannt für', data.known_for)

    .addField('Schiffe', data.ships.length, true)
    .addField('Fahrzeuge', data.vehicles.length, true)

  if (data.image !== null) {
    reply.setImage(data.image)
  }

  return reply
}

module.exports = createEmbed