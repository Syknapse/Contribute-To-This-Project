# Maintainer's Guide

Is guide ko un logon ke liye banaya gaya hai jo project ke maintainers ke roop mein shamil hona chahte hain, taki community ke liye project ko manage aur maintain kar saken. (**Yah first-time contributors ke liye ek guide nahi hai**)

## Translations
Is tutorial ko aur bhi [Languages](translations/README.md) mein padh sakte hai.

| [English](maintainer_guide.md)   | [Bangla](translations/maintainer_guide/maintainer_guide.ben.md) | [Chinese (Traditional)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [German](translations/maintainer_guide/maintainer_guide.ger.md) | [Hindi](translations/maintainer_guide/maintainer_guide.hin.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Italian](translations/maintainer_guide/maintainer_guide.ita.md) | [Japanese](translations/maintainer_guide/maintainer_guide.jpn.md) | [Portuguese](translations/maintainer_guide/maintainer_guide.por.md) | [Ukrainian](/translations/maintainer_guide/maintainer_guide.ukr.md) | [Hinglish](/translations/maintainer_guide/maintainer_guide.hing.md) |

> Project documentation ki transalation contribute kr sakte hai. Contribute krne k liye [`Tralsation Guide`](translations/README.md)  pdhiye

---

## Objectives

Hamara main maksad contributors ko unke pull request krne ke point se turant jald se jald feedback dene ka hai. Matlab ki code review dena aur accepted PRs ko merge karna.
Iske alawa, hum project ko bhi sambhal sakte hain takii har tarike se sabkuch sahi chale, aur contributors ki zyada se zyada madad ho sake.

## Ye repository kiske liye hai?

Ye unke liye hai jinhe Git aur GitHub ki thodi bohot bhi samajh ho. Aapko ek expert hone ki zaroorat nahi hai, yah guide beginners kafi maddad kr sakti hai. Yah ek active project hai jise lagatar contribution milta hai aur yah bahut se logon ko unke pehle open source contribution dene mein madad karti hai. Is project ke maintainers hone se contributors ko lagataar madad milti hai aur unhe apne pehle contribution mei asaani hoti hai jisse wo encourage hote hai aur zyada contribution k liye.

Aap ismein jitna samay dena chahte hain, utna samay de sakte hain. Ham ummid karte hain ki ham sab ke bich yah project bina kisi problem ke jaari rakh sake.

## Contribute krne ka tarika

- Project ke pull request section mein jayein, sabse purane pull request se shuru karein jo 'changes requested' state mein nahi hai.
- Ek PR kholen aur file changes tab par jayein aur code review shuru karein.
- PR ko dekhen, dekhen ki yah tutorial ke anusaar hai ya nahi.
- Yah dekhen ki HTML, link, aur data sab sahi hai. Yah dekhen ki card sahil position mein hai, jahan par hona chahiye.
- Agla conflict check karein. `master` ko PR branch mein merge conflicts ko dur karne ke liye. Conflict aksar tab hota hai jab pichhle samay se kitne PRs use kar rahe hain aur kuch purane version ka istemal kar rahe hain.
- Agar yah case hai toh conflict ko dur karein. Aksar aapko fork banaye jaane ke baad se jin cardon ko add kiya gaya tha, un cardon ke upar naye card ko add karne ki zaroorat hoti hai.
- Agar aur sab bhi thik hai, toh PR ko approve karein, contributor ko unke contribution ke liye thanks kehne ke liye ek message likhein (yaad rahe ki yah unke liye pehli bar hai aur unhe encouragement ki aavashyakta hai).
- PR ko master mein merge karein.

## Request Changes 

- Kabhi-kabhi PR mein problems hoti hai jo contributor sahi kr sakte hai, jaise galat branching, todafod HTML, missing information, card galat jagah par rakhna. Kuch aise samasya jo tutorial ko sahi dhang se nahi follow ki gayi hai (aur yah aam merge conflict nahi hai).
- GitHub par code review kriye aur changes request kriye. Koshish kriye ki detail mei explain kriye, exact line pe comment kriye, sahi dhang se explain kriye ki problem kaha hai aur isko kaise sudhara ja sakta hain, aur unhe prerit karein ki yah PR review ka normal process hai.
- Jab aap taiyar ho, tab review submit karein.
- Conversation pe updated rahiye ki kahi contributor ko koi aur pareshani ya follow up question to nhi hai. Hamara aim sabko finish line k par le jaana hai, isliye ham unhe saara rasta dikhane ki koshish karte hain.
- Jab ve requested changes ko sudhar lete hain, tab PR ko master mein merge kiya ja sakta hai.

Hamesha dhyan dein ki naye changes ne project ko break to nahi kr diya hai aur live page aise hi chal raha hai jaise ki chalne chahiye. Aise parivartan ko merge karne se pehle use sthanik roop se parikshan karna hamesha behtar hai aur kabhi bhi kuch shak hai toh use merge nahi karna chahiye.

## Tools

Agar PRs zyada nahi hai toh yah saari prakriya project ke GitHub page mein seedhe ki ja sakti hai.
Halaanki, kabhi-kabhi kuch PRs waiting ke liye hote hai aur usmei zaroor  kuch merge conflicts hote hain. Merge confict door krne k liye koi bhi tools use kr sakte hai.
Main [GitKraken]((https://www.gitkraken.com/download)) jaise ek tool ka istemal karne ki salah deta hoon. Ye visual tool hai jisse project manage krne mei asani hoti hai jab zyada PRs ho jati hai.
GitKraken ko download karein, project ko clone karein. Apne code editor aur GitKraken ke sammilit merge conflict tool ka istemal karke aapko PRs ko jaldi se dekhne, conflict ko dur karne aur merge karne ki purn niyantrana deta hai.

Project mein Prettier install kiya gaya hai, jisse yogdan dene wale contributor PR kaise bhi submit kare, style guide lagu kiya jayega. Is project ko hamesha ek hi indentation aur style ke sath rakha ja sakta hai.
Agar aapko lagta hai ki HTML file achhi nhi lag rhi hai, toh project k root folder mei neeche diye gaye code ko run kariye.

```js
npx prettier --write index.html
```

Yah koshish karega file ko style krne ki, aur agar yah nahi kar sakta toh aapko galtiyan dikhayega. Kabhi-kabhi ek closing tag reh jata hai ya galat HTML galti se merge ho jati hai aur isko pahchanne aur sudharne ka yah ek achha tarika hai.

Kabhi bhi pareshani mein ho toh, aap PR mei message kr k mujhe ya kisi bhi maintainer ko bata sakte hain.Ya mujhe seedha message kr dei [Twitter](https://twitter.com/Syknapse) pe.

## Hamare sath Social media pe jude
Hamare saath is project ko saath mein badhane ke liye judein. Mere [Twitter](https://twitter.com/Syknapse) par mujhe apna GitHub user name bhejein, taki main aapko jod sakoon. Aap Discord Community mein bhi jud sakte hain neeche diye gaye button par click karke:

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Discord server Join kriye!')