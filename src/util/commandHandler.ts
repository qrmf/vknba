import { Client, Message } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';

import log from './logger';
import { CommandStructure, ConfigObject, LogTypes } from '../types';

let commands: Array<CommandStructure> = [];

export function loadCommands() {
  const commandDirectory = join(__dirname, '..', 'commands');

  // Get all command files
  const commandList: Array<string> = readdirSync(commandDirectory);

  // Load individual commands
  for (let i: number = 0; i < commandList.length; i++) {
    // Get command
    const commandFileLocation = commandList[i];

    try {
      // Load command
      const command: CommandStructure = require(join(
        __dirname,
        '..',
        'commands',
        commandFileLocation,
      )).commandInformation;

      // Announce command
      log(
        'DEVELOPMENT',
        'CommandHandler::loadCommands',
        `Loaded command (${command.name})`,
      );

      // Add command to commands object
      commands.push(command);
    } catch (e) {
      log(
        'ERROR',
        'CommandHandler::loadCommands',
        `Failed to load command (${commandFileLocation})\n${e}`,
      );
    }
  }
}

export function runCommand(
  client: Client,
  config: ConfigObject,
  message: Message,
) {
  const command: string = message.content
    .split(' ')[0]
    .replace(config.commandPrefix, '');

  commands.forEach((commandHandler) => {
    if (commandHandler.aliases.find((alias) => alias === command)) {
      commandHandler.exec(client, config, message);
    }
  });
}
