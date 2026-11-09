import { copyFileSync, existsSync } from 'node:fs';

const seed = 'db.seed.json';
const db = 'db.json';
const reset = process.argv.includes('--reset');

if (reset || !existsSync(db)) {
  copyFileSync(seed, db);
  console.log(`${db} ${seed} asosida ${reset ? 'qayta tiklandi' : 'yaratildi'}.`);
} else {
  console.log(`${db} mavjud, oʻzgartirilmadi (qayta tiklash uchun: npm run api:reset).`);
}
