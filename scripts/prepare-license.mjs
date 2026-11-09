import { existsSync, writeFileSync } from 'node:fs';

const target = 'src/app/core/primeng-license.ts';

if (existsSync('.env')) {
  process.loadEnvFile('.env');
}

const key = process.env.PRIMENG_LICENSE?.trim() ?? '';

writeFileSync(target, `export const PRIMENG_LICENSE = ${JSON.stringify(key)};\n`);

console.log(
  key
    ? `PrimeNG litsenziya kaliti ${target} fayliga yozildi.`
    : `PRIMENG_LICENSE topilmadi: ${target} boʻsh kalit bilan yaratildi, sahifada litsenziya banneri chiqadi.`,
);
