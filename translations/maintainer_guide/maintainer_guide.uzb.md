# Boshqaruvchilar uchun Qoʻllanma

Bu qoʻllanma boshqaruvchi sifatida qoʻshilib, hamjamiyat uchun loyihani nazorat qilishni hohlaganlar uchun.
(Bu birinchi bor hissa qoʻshuvchilar uchun **emas**.)

## Tarjimalar

Qoʻllanma [boshqa tillarda](translations/README.md) ham mavjud.

| [Ingliz (English)](maintainer_guide.md) | [Bangladeshcha (বাংলা)](translations/maintainer_guide/maintainer_guide.ben.md) | [Xitoycha (Anʼanaviy)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [Fransuz (Française)](translations/maintainer_guide/maintainer_guide.fra.md) | [Nemis (Deutsch)](translations/maintainer_guide/maintainer_guide.ger.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Hind (हिन्दी)](translations/maintainer_guide/maintainer_guide.hin.md) | [Indonez (Bahasa Indonesia)](translations/maintainer_guide/maintainer_guide.ind.md) | [Italian (Lo italiano](translations/maintainer_guide/maintainer_guide.ita.md) | [Yapon (日本語)](translations/maintainer_guide/maintainer_guide.jpn.md) | [Koreys (韓国人)](translations/maintainer_guide/maintainer_guide.kor.md) |
| [Portugalcha (Português)](translations/maintainer_guide/maintainer_guide.por.md) | [Rus (Pусский](translations/maintainer_guide/maintainer_guide.rus.md) | [Ukrain (Yкраїнська)](/translations/maintainer_guide/maintainer_guide.ukr.md) |

> Loyiha qoʻllanmasi uchun tarjimalar hush koʻriladi.
> Bunda oʻz hissangizni qoʻshish uchun [`Tarjima Qilish Qoʻllanmasini`](translations/README.md) oʻqing.

---

## Maqsalar

Bizning asosiy maqsadimiz hissa qoʻshuvchilar Tortish Soʻrovi yuborishlari bilan ularni qisqa va mazmunli izoh bilan taʼminlashdir. Bu asosan koʻd tekshirish va qabul qilingan soʻrovlarni birlashtirishni oʻz ichiga oladi. 

Qoʻshimcha ravishda, boshqaruvchilar loyiha toʻgʻri ishlashda davom etib, hissa qoʻshuvchilar uchun iloji boricha foydali boʻlib qolishini taʼminlashadi

## Bu kim uchun?

Git va Git Omboridan foydalanishda asosiy tushunchasi bor boʻlgan har kim. Siz mutaxassis boʻlishingiz talab qilinmaydi — bu qoʻllanma hatto yangi boshlayotganlar uchun ham qoʻl keladi. 

Bu loyiha faol ravishda faoliyat yuritib, doimiy oʻzgarishlar qabul qiladi va koʻplab insonlarga ilk bor Ochiq Manbaʼga hissa qoʻshishlarida yordam beradi. Birinchi bor hissa qoʻshayotganlarning ilk tajribasi yaxshi oʻtishini taʼminlash va bunda bardavom boʻlishlariga boshqaruvchilar ishonch hosil qilishadi.

Siz har qanday miqdorda hissa qoʻshishingiz mumkin, xoh kichik boʻlsin, xoh katta. Birgalikda, biz loyiha bardavomligini saqlaymiz.

## Metodologiya

- Loyihaning **Pull Requests** boʻlimiga oʻting va eng eski tortish soʻrovidan boshlang, faqat, **changes requested** holatida emasligiga ishonch hosil qiling.
- Tortish soʻrovini oching, **Files changed** boʻlimiga oʻting, va koʻd tekshirishni boshlang.
- Tortish soʻrovini koʻrib chiqib, qoʻllanmada belgilab oʻtilgan koʻrsatmalariga amal qilishini tekshiring. 
- HTML, havolalar, va maʼlumot toʻgʻriligini tekshiring. Talab etilganida, karta fayl boshida taqdim etilganiga ishonch hosil qiling.
- Birlashtirishdagi nizolarni tekshiring. Agar kerak boʻlsa, `master` novdasini tortish soʻrovining novdasiga birlashtirib muammoni bartaraf qiling. Nizolar asosan fork eskirib, bir qancha tortish soʻrovlari oʻxshash qismlarni oʻzgartirganida yuzaga keladi.
- Buni yangi kartani fork ketidan qoʻshilgan yangi kartalardan yuqoriga qoʻyish orqali hal eting.
- Agar barchasi toʻgʻri koʻrinsa, tortish soʻrovini qabul qiling va hissa qoʻshuvchiga minnatdorlik bildirib izoh yozing. Eslab qoling, koʻplab hissa qoʻshuvchilar buni birinchi marotaba qilishyabdi va ragʻbatlantirish foydali boʻladi.
- Tortish soʻrovini `master` novdasiga birlashtiring. 

## Oʻzgartirish soʻrang

- Baʼzan, tortish soʻrovidagi muammolar joʻnatuvchining oʻzi tomonidan hal etilishi kerak, masalan, notoʻgʻri tanlangan novda, HTML koʻdida nuqsonlar, yetishmayotgan maʼlumot, yoki hato joylashtirilgan karta. Bunday nizolar qoʻllanmaga toʻgʻri ergashilmaganida yuzaga keladi va sodda birlashtirish muammolari emas.
- Git Omborida koʻrib chiqishni boshlang va oʻzgarish soʻrov qiling. Iloji boricha barcha detallarni tavsiflang — muammoli qatorni oʻzida izoh, nima muammoligiga aniqlik, qanday qilib tuzatish mumkinligi, va joʻnatuvchiga bunday muammolar Tortish Soʻrovi paytida doim boʻlishini eslating. 
- Tayyor boʻlishingiz bilan koʻrib chiqilgan materiallarni joʻnating.
- Munozaralar chatidan habardor boʻling, hissa qoʻshuvchida siz yordam berishingiz mumkin boʻlgan savollar boʻlishi mumkin. Bizning maqsadimiz barchani ohirgi marragacha kuzatib borish va jarayon boʻlab qoʻllab quvvatlash.
- Soʻralgan oʻzgartirishlar bajarilganidan soʻng, tortish soʻrovi `master` novdasiga birlashtirilishi mumkin.

Doim tekshiring, oʻzgartirishlar loyihani buzmasin va jonli sahifa kutilgandek ishlasin. Oʻzgarishlarni birlashtirishdan avval mahalliy ravishda sinab koʻrish eng yaxshi sinalgan usul, va nuqsonli boʻlsa oʻsha joyida bartaraf etish.

## Ish qurollari

Agar tortish soʻrovlari kam boʻlsa, butun koʻrib chiqish jarayoni toʻgʻridan toʻgʻri loyihaning Git Omboridagi sahifasida amalga oshirilishi mumkin.
Lekin, kutilayotgan holatdagi bir qancha tortish soʻrovlari boʻlishi oddiy holat, bu birlashtirishda muammolarga olib keladi. Siz hohlagan vositangizdan foydalanib oʻzgarishdagi farqlarni tekshirishingiz yoki nuqsonlarni bartaraf etishingiz mumkin.

Tavsiya qilinadigan vosita bu [GitKraken](https://www.gitkraken.com/download). U vizual interfeys orqali bir nechta tortish soʻrovlari bilan ishlashda yengillik yaratadi, va shu orqali loyiha boshqarivida yordam beradi.
GitKrakenʼni yuklab oling, loyihani nusxalang, va matn muharriringiz bilan birga ishlating. Integratsiyalashgan birlashtirish muammolari asbobi sizga samarali ravishda tortish soʻrovlarini koʻrib chiqishingiz, nuqsonlarni bartaraf qilishingiz, va oʻzgarishlarni birlashtirishingiz ustidan toʻliq nazorat imkonini beradi.

Loyiha Prettierʼdan foydalanib, hissadorlarning tortish soʻrovlari qanday qabul qilinishidan qatʼiy nazar, formatlash davomiyligini taʼminlaydi. Bu esa kod omborini bir uslubda shakllantiradi
Agar HTML fayl formatlanmagandek koʻrinsa, quyidagi buyruqni loyihaning asosiy manzilida ishga tushuring:

```js
npx prettier --write index.html
```

---

## ✅ Endi nima qilish kerak (ohirgi bosqich)

- Quyidagini faylga yozing
- **Topshirish habari**: 
  `Boshqaruvchilar uchun Qoʻllanmadagi aniqlikni yaxshilang, grammatika, va davomiylikga eʼtibor bering`
- **PR izohi**:
