import { Client, Message } from 'discord.js';

import { CommandStructure, ConfigObject } from '../types';

function executeCommand(
  client: Client,
  config: ConfigObject,
  message: Message,
): void {
  const timestamp: number = Date.now();
  message.channel.send('🏓 Ping!').then(msg => {
    msg.edit(`🏓 Pong!\n${msg.createdAt.valueOf() - timestamp}ms of Latency`);
  });
  message.delete();
}

export const commandInformation: CommandStructure = {
  aliases: ['p', 'ping'],
  exec: executeCommand,
  help: (prefix) => `Run \`${prefix}ping\` to check the bot's latency`,
  name: 'Ping',
};
