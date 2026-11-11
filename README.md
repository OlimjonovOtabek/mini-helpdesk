# Mini Helpdesk

Mini Helpdesk - ofis xodimlarining IT boʻyicha murojaatlarini (printer, tarmoq, dasturlar, kirish huquqlari va hokazo) roʻyxatga olish va kuzatib borish uchun kichik veb-ilova.
Ilova Angular va PrimeNG asosida yozilgan, maʼlumotlar esa lokal mock API (json-server) orqali beriladi.

## Talablar

- Node.js 22.22.3+ yoki 24.15.0+ (Angular CLI talabi; tavsiya etilgan versiya `.nvmrc` faylida)
- npm

## Oʻrnatish

```bash
npm ci
```

### PrimeNG litsenziya kaliti

PrimeNG litsenziya kaliti bilan ishlaydi.
Kalitni jamoa rahbaridan oling va loyiha ildizida `.env` fayl yarating (namuna: `.env.example`):

```dotenv
PRIMENG_LICENSE=sizning-kalitingiz
```

`.env` git'ga qoʻshilmaydi.
`npm start`, `npm test` va `npm run build` ishga tushishidan oldin kalit avtomatik ravishda `src/app/core/primeng-license.ts` fayliga yoziladi (bu fayl ham git'ga qoʻshilmaydi).
Kalit boʻlmasa ham ilova ishlaydi, faqat sahifa burchagida litsenziya haqida ogohlantirish chiqadi.

## Ishga tushirish

Ikkita terminal kerak:

1. Birinchi terminalda mock API'ni ishga tushiring: `npm run api` (http://localhost:3000).
2. Ikkinchi terminalda ilovani ishga tushiring: `npm start`.
3. Brauzerda http://localhost:4215 manzilini oching.

## Maʼlumotni boshlangʻich holatga qaytarish

json-server barcha oʻzgarishlarni `db.json` fayliga yozadi.
Bu fayl git'da saqlanmaydi va birinchi marta `npm run api` ishga tushganda `db.seed.json` asosida yaratiladi.

Maʼlumotni boshlangʻich holatga qaytarish uchun:

```bash
npm run api:reset
```

## Skriptlar

| Skript                 | Vazifasi                                                           |
| ---------------------- | ------------------------------------------------------------------ |
| `npm start`            | Ilovani http://localhost:4215 manzilida ishga tushiradi            |
| `npm run api`          | Mock API'ni http://localhost:3000 manzilida ishga tushiradi        |
| `npm run api:reset`    | `db.json`ni `db.seed.json` asosida qayta yaratadi                  |
| `npm run lint`         | ESLint bilan kodni tekshiradi                                      |
| `npm run format`       | Prettier bilan barcha fayllarni formatlaydi                        |
| `npm run format:check` | Fayllar Prettier qoidalariga mosligini tekshiradi (oʻzgartirmaydi) |
| `npm test`             | Unit testlarni (Vitest) bir marta ishga tushiradi                  |
| `npm run build`        | Production build yaratadi (`dist/` papkasiga)                      |

## Ish tartibi

Ticketlar bilan qanday ishlash, branch va commit nomlari, Pull Request talablari [CONTRIBUTING.md](CONTRIBUTING.md) faylida yozilgan.

 ## arxitektura
 api papkasini ichida ticket larga tegishli bulgan servise va modul lar joylashkan
 core papkani ichida asosiy, xar bir page da ishtrok  etiladigan  component saxlanadi
 features papkasida pagelar joylashgan
 share papkasida kop ishlatiladigan component lar joylashgan