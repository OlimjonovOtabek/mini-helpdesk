# Ish tartibi

Bu loyihada real jamoadagi kabi ishlaymiz.
Quyidagi qoidalar hamma ticketlar uchun amal qiladi.

## Ticketlar va Pull Requestlar

- Har bir ish GitHub Issue orqali beriladi va Pull Request (PR) orqali qabul qilinadi.
- `main` branchga toʻgʻridan-toʻgʻri push qilinmaydi.
- Bitta PR = bitta ticket. PR tavsifida `Closes #N` yoziladi (N - issue raqami).
- Ticketni boshlashdan oldin issue'ga 2-3 qatorda uni qanday qilmoqchi ekaningizni yozasiz.

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

## Kod tuzilishi

### Servislar va modellar

Backend bilan ishlaydigan servislar va modellar `src/app/api/` papkasida, domen boʻyicha joylashadi.
Har bir domen papkasida uning servisi va modellar fayli boʻladi:

```text
src/app/api/
  tickets/
    tickets.service.ts
    ticket.model.ts
```

### Dialoglar

- `DialogService` (`primeng/dynamicdialog`) ishlatilmaydi. Dialog shablonda `<p-dialog>` bilan yoziladi, koʻrinishi `[(visible)]` orqali boshqariladi.
- Oʻchirish kabi amallarni tasdiqlash uchun `shared/confirm-dialog` komponentidan foydalaniladi.
- Feature komponentida yaratish yoki tahrirlash dialogi boʻlsa, u alohida komponentga chiqariladi va komponent nomiga `.form` qoʻshib nomlanadi:

```text
features/tickets/ticket-list/
  ticket-list.ts
  ticket-list.html
  ticket-list.form.ts
  ticket-list.form.html
```

### Formalar

Formalar Reactive Forms (`FormGroup`, `FormControl`) bilan yoziladi.
Maydon qiymatlarining oʻzgarishi RxJS orqali (`valueChanges`) kuzatiladi.

## PR ochishdan oldin

Quyidagilarning hammasi xatosiz oʻtishi kerak:

```bash
npm run lint
npm run format:check
npm test
npm run build
```

Bundan tashqari, oʻzgarishni brauzerda oʻzingiz tekshirib koʻrgan boʻlishingiz kerak.
CI ham shu tekshiruvlarni bajaradi, CI qizil boʻlsa PR qabul qilinmaydi.

## AI vositalari

AI vositalaridan foydalanish mumkin.
Lekin PR'dagi har bir qatorni ogʻzaki tushuntirib bera olishingiz shart.

## Qotib qolsangiz

30 daqiqadan koʻp qotib qolsangiz, savol bering.
Savolda uchta narsani yozing:

1. Nima qilmoqchi edingiz.
2. Nimani sinab koʻrdingiz.
3. Nima chiqdi (xato matni, skrinshot).
