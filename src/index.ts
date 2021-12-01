import { log } from 'console';
import { config } from 'dotenv';

config();

export function main() {
  log('hello');
  return 0;
}
