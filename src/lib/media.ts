import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** True when a file under /public exists (e.g. '/projets/foo/avant-1.jpg'). Lets project pages
 *  show a labelled placeholder until the real photo/video is dropped into the folder. */
export const mediaExists = (src?: string): boolean =>
  !!src && existsSync(join(process.cwd(), 'public', src));
