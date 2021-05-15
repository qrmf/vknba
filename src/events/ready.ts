import { Client } from 'discord.js';

import { ConfigObject } from '../types';
import log from '../util/logger';

export function handler(client: Client, config: ConfigObject): () => void {
  return () => {
    log(
      'INFORMATION',
      'Events::Ready',
      `Logged into Discord (${client.user?.tag}) [${client.user?.id}]`,
    );

    client.user?.setPresence({
      activity: {
        name: 'in my own creation',
        type: 'COMPETING',
      },
      afk: false,
      status: 'idle',
    });
  };
}
