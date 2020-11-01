import { Guild } from '../../structures/guild.ts'
import { Gateway, GatewayEventHandler } from '../index.ts'

export const guildDelte: GatewayEventHandler = async (gateway: Gateway, d: any) => {
  const guild: Guild | void = await gateway.client.guilds.get(d.id)

  if (guild !== undefined) {
    guild.refreshFromData(d)
    await gateway.client.guilds.delete(d.id)
    gateway.client.emit('guildDelete', guild)
  }
}