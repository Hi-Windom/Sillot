import { readFileSync } from "node:fs";

export async function get({ params, request }) {
  const buffer = readFileSync(new URL('../../astro.png', import.meta.url));
  return {
    body: buffer.toString('hex'),
    encoding: 'hex',
  };
}
