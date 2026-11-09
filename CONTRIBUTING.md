# Ish tartibi

Bu loyihada real jamoadagi kabi ishlaymiz.
Quyidagi qoidalar hamma ticketlar uchun amal qiladi.

## Ticketlar va Pull Requestlar

- Har bir ish GitHub Issue orqali beriladi va Pull Request (PR) orqali qabul qilinadi.
- `main` branchga toʻgʻridan-toʻgʻri push qilinmaydi.
- Bitta PR = bitta ticket. PR tavsifida `Closes #N` yoziladi (N - issue raqami).
- Ticketni boshlashdan oldin issue'ga 2-3 qatorda uni qanday qilmoqchi ekaningni yozasan.

## Branch nomi

Ticket raqami va qisqa tavsif, soʻzlar defis bilan:

```text
T2-ticket-detail
T5-search-and-filter
```

## Commitlar

- [Conventional Commits](https://www.conventionalcommits.org/) formatida, ingliz tilida yoziladi.
- Asosiy turlar: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`.
- Commitlar kichik va mantiqli boʻlsin: bitta commit - bitta oʻzgarish.

```text
feat: add ticket detail page
fix: show correct label for closed tickets
```

## PR ochishdan oldin

Quyidagilarning hammasi xatosiz oʻtishi kerak:

```bash
npm run lint
npm run format:check
npm test
npm run build
```

Bundan tashqari, oʻzgarishni brauzerda oʻzing tekshirib koʻrgan boʻlishing kerak.
CI ham shu tekshiruvlarni bajaradi, CI qizil boʻlsa PR qabul qilinmaydi.

## AI vositalari

AI vositalaridan foydalanish mumkin.
Lekin PR'dagi har bir qatorni ogʻzaki tushuntirib bera olishing shart.

## Qotib qolsang

30 daqiqadan koʻp qotib qolsang, savol ber.
Savolda uchta narsani yoz:

1. Nima qilmoqchi eding.
2. Nimani sinab koʻrding.
3. Nima chiqdi (xato matni, skrinshot).
