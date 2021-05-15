import { Client, Message } from 'discord.js';

import { CommandStructure, ConfigObject } from '../types';
import log from '../util/logger';
import { isBotDeveloper } from '../util/permissionsManager';

function executeCommand(
  client: Client,
  config: ConfigObject,
  message: Message,
): void {
  // Check permissions first
  if (!isBotDeveloper(config, message.author.id)) {
    message.channel.send(
      `> ${message.cleanContent.replace('\n', '\n> ')}\n<@${
        message.author.id
      }>, I'm sorry, but you aren't allowed to use that command.`,
    );
    return;
  }

  const evalString: string = message.content
    .split(' ')
    .splice(1)
    .join(' ');

  try {
    log('DEVELOPMENT', 'Command::Eval', `Evaluating string: ${evalString}`);
    eval(evalString);
  } catch (e) {
    message.channel.send({ code: 'javascript', content: e });
  }
}

export const commandInformation: CommandStructure = {
  aliases: ['e', 'eval'],
  exec: executeCommand,
  help: (prefix) => 'Evaluate your code.',
  name: 'Eval',
};
