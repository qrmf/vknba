import { Client, Message } from 'discord.js';

import { ConfigObject } from '../types';
import { runCommand } from '../util/commandHandler';
import log from '../util/logger';

export function handler(
  client: Client,
  config: ConfigObject,
): (message: Message) => void {
  return (message: Message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(config.commandPrefix))
      runCommand(client, config, message);
  };
}
