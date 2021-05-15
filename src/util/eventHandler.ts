import { Client } from 'discord.js';

import log from './logger';
import { ConfigObject } from '../types';

export function registerHandler(client: Client, config: ConfigObject): void {
  log('DEVELOPMENT', 'EventHandler::registerHandler', 'Yet to implement fully');

  client.on('message', require('../events/message').handler(client, config));
  client.on('ready', require('../events/ready').handler(client, config));
}
