import * as Discord from 'discord.js';

export type CommandHandler = (
  client: Discord.Client,
  config: ConfigObject,
  message: Discord.Message,
) => void;

export type CommandStructure = {
  aliases: Array<string>;
  exec: CommandHandler;
  help: (prefix: string) => string;
  name: string;
};

export type ConfigObject = {
  commandPrefix: string;
  developerIDs: Array<string>;
  discord: {
    clientID: string;
    clientSecret: string;
    publicKey: string;
    token: string;
  };
  pluralKit: {
    knownSystems: Array<GenericSystemInformation>;
    token: string;
  };
};

export type GenericSystemInformation = {
  id: string;
  name: string;
  userIDs: Array<string>;
};

export type LogTypes = 'DEVELOPMENT' | 'ERROR' | 'INFORMATION' | 'WARNING';
