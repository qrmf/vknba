import { PermissionString, GuildMember } from 'discord.js';

import { ConfigObject } from '../types';

export function checkPermission(
  member: GuildMember,
  permission: PermissionString,
) {
  return member.permissions.has(permission);
}

export function isBotDeveloper(config: ConfigObject, userID: string): boolean {
  return config.developerIDs.find((id) => id === userID) !== undefined;
}
