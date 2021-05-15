import { LogTypes } from '../types';

function padNumber(number: number, digits: number): string {
  let returnValue: string;

  if (String(number).length >= digits) return String(number);

  let difference: number = digits - String(number).length;

  returnValue = String(0).repeat(difference) + String(number);

  return returnValue;
}

export default function log(
  logType: LogTypes,
  codeSection: string,
  message: string,
): void {
  const dateNow: Date = new Date();

  const timestamp: string = `${dateNow.getUTCFullYear()}-${padNumber(
    dateNow.getUTCMonth(),
    2,
  )}-${padNumber(dateNow.getUTCDate(), 2)} ${padNumber(
    dateNow.getUTCHours(),
    2,
  )}:${padNumber(dateNow.getUTCMinutes(), 2)}:${padNumber(
    dateNow.getUTCSeconds(),
    2,
  )}.${padNumber(dateNow.getUTCMilliseconds(), 3)}`;

  if (logType === 'DEVELOPMENT') {
    console.log(`[${timestamp}] [${codeSection}] DEVELOPMENT\n${message}`);
    return;
  }
  if (logType === 'ERROR') {
    console.error(`[${timestamp}] [${codeSection}] ERROR\n${message}`);
    return;
  }
  if (logType === 'INFORMATION') {
    console.info(`[${timestamp}] [${codeSection}] INFO\n${message}`);
    return;
  }
  if (logType === 'WARNING') {
    console.warn(`[${timestamp}] [${codeSection}] WARNING\n${message}`);
    return;
  }
}
