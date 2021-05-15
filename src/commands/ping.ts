import { Client, Message } from 'discord.js';

import { CommandStructure, ConfigObject } from '../types';

function executeCommand(
  client: Client,
  config: ConfigObject,
  message: Message,
): void {
  // const timestamp: Date = new Date();

  // console.info(message.createdAt);

  message.channel.send('Pong!');
}

export const commandInformation: CommandStructure = {
  aliases: ['p', 'ping'],
  exec: executeCommand,
  help: (prefix) => `Run \`${prefix}ping\` to check the bot's latency`,
  name: 'Ping',
};
