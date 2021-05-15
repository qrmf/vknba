import { Client } from 'discord.js';

//@ts-ignore
import * as Config from '../config.json';
import { loadCommands } from './util/commandHandler';
import { registerHandler } from './util/eventHandler';
import log from './util/logger';

const client: Client = new Client();

log('INFORMATION', 'Main', 'Loading Commands');
loadCommands();

registerHandler(client, Config);

log('INFORMATION', 'Main', 'Logging into Discord Client');
client.login(Config.discord.token);
