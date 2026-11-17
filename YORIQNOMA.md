# Yo'riqnoma: Mini Helpdesk bosqichi

**Davr:** 2026-yil 18-noyabr – 4-dekabr
**Repo:** https://github.com/OlimjonovOtabek/mini-helpdesk
**Mockup:** https://claude.ai/artifact/Tu3p11Z6ViuYiDTZg1Wprv
**O'quv manba:** https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt

Bu yo'riqnoma qanday ishlashimizni tushuntiradi. Kod bo'yicha qoidalar (branch, commit, papkalar, dialog va formalar) [CONTRIBUTING.md](CONTRIBUTING.md) faylida, ularni ham albatta o'qing.

---

## 1. Maqsad

Yanvar oxirigacha siz:

- ticketni boshidan PR'gacha **mustaqil** olib borasiz;
- yozgan har bir qatoringizni va uning alternativini **tushuntirib bera olasiz**;
- signals, RxJS, reactive forms, HTTP, routing, pipe va directive'larni **real vazifada** ishlatasiz;
- muammoni DevTools va Network tab bilan **o'zingiz** topasiz;
- boshqa odamning kodiga **mazmunli review** yozasiz.

Mentor dars o'tmaydi. U yo'nalish beradi, savol so'raydi va kodingizni review qiladi. Asosiy o'rganish sizning ishingiz orqali bo'ladi.

---

## 2. Har kungi tartib

### Daily (har kuni, 15–20 daqiqa)

1. **Kecha yozgan kodingizni ko'rsatasiz.** Ekraningizni ulashib, nima qilganingizni va nega shunday qilganingizni tushuntirasiz. Mentor kodingiz bo'yicha savollar beradi: "nega?", "boshqacha qanday qilsa bo'lardi?", "API xato qaytarsa nima bo'ladi?".
2. **Yangi o'rganganlaringiz.** Mentor TIL faylingizdan 1–2 ta savol beradi.
3. **Bugungi reja va blocker.**

Daily imtihon emas. "Bilmayman" deyish normal holat. Bunday savollar yozib olinadi va bir haftadan keyin yana so'raladi. Shu vaqt ichida o'rganib olasiz.

### TIL fayli ("Today I Learned")

Har kuni ish oxirida repo'dagi [TIL.md](TIL.md) fayliga **10–15 qator** yozasiz, o'z so'zlaringiz bilan. Har kungi yozuv to'rtta bo'limdan iborat:

- **O'rgandim** (4–6 qator): yangi tushuncha nima va nima uchun kerak.
- **Loyihada** (2–4 qator): qayerda ishlatdingiz, fayl yoki PR raqami bilan.
- **Muammo va yechim** (2–3 qator): nima ishlamadi va sababini qanday topdingiz.
- **Savol** (1–2 qator): nimani hali tushunmadingiz.

To'liq namuna TIL.md faylining o'zida. Eng yangi kun eng tepada turadi. O'zgarish joriy ticket PR'ingizga alohida `docs: update TIL` commiti bo'lib qo'shiladi.

"Savol" bo'limi ayniqsa foydali: ertangi daily'da birinchi bo'lib shu muhokama qilinadi. Qatorni to'ldirish uchun yozmang, har bir qatorda bitta aniq fikr bo'lsin.

---

## 3. Ticket bilan ishlash

### 1-qadam: issue'ni o'qish

- Issue tavsifi va **qabul shartlari**: nima qilinishi kerak.
- **Mockup**: qanday ko'rinishi kerak. Mockup yo'nalish beradi, piksel-perfect talab emas. Ranglar va o'lchamlar `src/styles.scss`dagi `--app-*` tokenlaridan olinadi.
- **Angular key points**: bu savollarga tayyor javob berilmaydi. Ularni o'zingiz o'ylab topishingiz va hujjatdan o'qishingiz kerak.

### 2-qadam: reja yozish (kod yozishdan oldin)

Issue'ga izoh qilib rejangizni yozasiz. Bunga 20–30 daqiqa ketsin:

```markdown
## Yechim rejasi

Qaysi fayllar yaratiladi yoki o'zgaradi va nega.

## Qanday tekshiraman

Qabul shartlarining har biri bo'yicha brauzerda nimani tekshirishim.

## Key points bo'yicha javoblarim

Har bir savolga qisqa javob yoki "bilmayman, shu yerdan o'qiyman: <havola>".

## Savollar va risklar

Nima noaniq, qayerda qiyin bo'lishi mumkin, mockup'da ko'rsatilmagan holatlar.
```

Mentor rejani ko'rib chiqib izoh beradi. **Kodni reja tasdiqlangandan keyin boshlaysiz.**

### 3-qadam: kod

- Branch nomi: `T15-pipes` kabi (CONTRIBUTING'ga qarang).
- Commitlar kichik bo'ladi, Conventional Commits formatida: `feat:`, `fix:`, `refactor:`.
- Ishni kichik bo'laklarga bo'lib, har birini brauzerda tekshirib borasiz.

### 4-qadam: Pull Request

PR ochishdan oldin quyidagilarni tekshiring:

- [ ] `npm run lint`, `npm run format:check` va `npm run build` xatosiz o'tadi.
- [ ] Har bir qabul shartini brauzerda o'zingiz tekshirdingiz.
- [ ] Xato holatini ham tekshirdingiz: `npm run api` to'xtatilganda nima bo'ladi?
- [ ] PR tavsifida `Closes #N`, nima qilinganligi, yondashuv va nega shunday tanlangani, qanday tekshirilgani yozilgan.
- [ ] UI o'zgargan bo'lsa, skrinshot bor.
- [ ] Ishlatilmagan import, `console.log` va kommentga olingan kod qolmagan.
- [ ] PR'dagi har bir qatorni tushuntirib bera olasiz.

### 5-qadam: review

- Mentor izohlari belgilangan bo'ladi:
  - `must:` merge qilishdan oldin tuzatilishi shart;
  - `question:` javob bering, ba'zan savolning o'zi sizga ishora bo'ladi;
  - `nit:` mayda taklif, xohishingizga ko'ra.
- Har bir izohga javob yozasiz: "tuzatdim (commit)" yoki "rozi emasman, chunki…". Asoslangan holda rozi bo'lmaslik ham yaxshi.
- Tuzatishlarni yangi commit qilib qo'shasiz. Force-push qilmaysiz.

---

## 4. Qotib qolsangiz

1. **30–45 daqiqa o'zingiz urining:** hujjat, xato matni, DevTools, Network tab.
2. Topolmasangiz, mentorga **shu formatda** yozasiz:
   - **Nima qilmoqchiman:** …
   - **Nima qildim:** …
   - **Nima kutdim:** …
   - **Nima bo'ldi:** (xato matni yoki skrinshot)
3. Mentor odatda darrov javob bermaydi. U yo'naltiruvchi savol beradi yoki qayerga qarashni aytadi. Bu ataylab shunday: muammoni o'zingiz topganingizda u yaxshiroq esda qoladi.

Shu formatda yozishning o'zi ko'pincha javobni topishga yordam beradi.

---

## 5. AI vositalari

AI ishlatish mumkin. Qoida bitta: **PR'dagi har bir qatorni tushuntirib bera olishingiz shart.** Tushuntira olmagan qatoringizni o'chirib, o'zingiz qayta yozasiz. Daily'dagi savollar aynan shuni tekshiradi.

---

## 6. Haftalik tartib

| Kun                | Nima bo'ladi                                            |
| ------------------ | ------------------------------------------------------- |
| Dushanba           | Daily, weekend lab himoyasi: 5 daqiqa demo va savollar  |
| Seshanba–payshanba | Daily, ticketlar, review                                |
| Juma               | Daily, retro (20 daqiqa), yangi weekend lab topshirig'i |
| Shanba             | Weekend lab, 3–4 soat, ko'pi bilan                      |
| Yakshanba          | Dam olish                                               |

**Weekend lab'lar** alohida `angular-weekend-labs` repo'sida bo'ladi. Har bir lab bitta mavzuga bag'ishlangan. PR orqali dushanba 09:00 gacha topshiriladi.

**Retro'da** uch savolga javob berasiz:

- bu hafta nima oson, nima qiyin bo'ldi;
- qayerda qotib qoldingiz va nima yordam berdi;
- keyingi hafta nimani boshqacha qilasiz.

---

## 7. Reja: ticketlar va lab'lar

### 1-hafta (18–21-noyabr)

| Ticket                                                                      | O'qish uchun                                                                                                                                                                                              |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [B1. Izohlar](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/9)    | [Signals](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/signals-va-modern-state-management), [Forms](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/forms-va-validation) |
| [T15. Pipe'lar](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/24) | [Pipes](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/linkedsignal-pipes-custom-directive-interceptor)                                                                                   |

**Shanba, 21-noyabr — Lab 1:** TypeScript va shablon asoslari. Bu lab boshlang'ich darajangizni aniqlash uchun.

### 2-hafta (23–28-noyabr)

| Ticket                                                                                      | O'qish uchun                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [T16. NotificationService](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/25)      | [Servislar](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/componentlararo-malumot-almashish.-servicega-kirish)                                                                                                                                                       |
| [T5. Yaratish va tahrirlash](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/4)     | [Forms](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/forms-va-validation), [input/output/model](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/modern-component-api-input-output-model), [typed forms](https://angular.dev/guide/forms/typed-forms) |
| [T6. O'chirish bugi](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/13)            | Chrome DevTools, Network tab                                                                                                                                                                                                                                                          |
| [T7. Xatolarni markaziy ushlash](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/6) | [HTTP](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/http-va-backend-integration), [Interceptor](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/linkedsignal-pipes-custom-directive-interceptor)                                                     |

**Shanba, 28-noyabr — Lab 2:** komponentlar, lifecycle va dependency injection.

### 3-hafta (30-noyabr – 5-dekabr)

| Ticket                                                                                        | O'qish uchun                                                                                                                                                       |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [T4. Sahifalash, qidiruv va filtr](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/5) | [RxJS](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/rxjs-asoslari-reactive-programming), [`switchMap`](https://rxjs.dev/api/operators/switchMap) |
| [T17. Saralash](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/26)                   | json-server 0.17 hujjati (`_sort`, `_order`)                                                                                                                       |
| [T18. Directive'lar](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/27)              | [Directive](https://odilbeks-organization.gitbook.io/angular-ustoz-shogirt/linkedsignal-pipes-custom-directive-interceptor)                                        |
| [T10. Code review](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/15)                | —                                                                                                                                                                  |
| [T14. Release v1.0.0](https://github.com/OlimjonovOtabek/mini-helpdesk/issues/23)             | [Keep a Changelog](https://keepachangelog.com/), [Semver](https://semver.org/)                                                                                     |

**Juma, 4-dekabr:** demo va oraliq suhbat. 30 daqiqa davomida shu 3 haftada ishlatgan mavzularingiz bo'yicha savollar beriladi.

**Shanba, 5-dekabr — Lab 3:** formalar chuqurroq.

Bitta ticket 3 kundan ko'proq cho'zilib ketsa, mentorga ayting. Muddatni surmaymiz, ishni kichik bo'laklarga bo'lamiz.

---

## 8. Baholash qanday bo'ladi

Har bir savol va har bir haftalik mezon 0–2 ball bilan baholanadi:

| Ball | Ma'nosi                                                                     |
| ---- | --------------------------------------------------------------------------- |
| 0    | Hali bilmaysiz. Mentor tushuntirdi, bir haftadan keyin yana so'raladi.      |
| 1    | Qisman bilasiz yoki ishora bilan topdingiz.                                 |
| 2    | O'zingiz, o'z so'zlaringiz bilan, loyihadan misol keltirib tushuntirdingiz. |

Har juma haftalik natija siz bilan birga ko'rib chiqiladi. Maqsad "2" olish emas. Maqsad haftadan haftaga o'sib borish.
