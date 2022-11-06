# [Bu Projeye Katkıda Bulunun](https://syknapse.github.io/Contribute-To-This-Project/)

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweet this project')

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')

> **Duyuru:** Bu projede yönetici olmak ve projenin sürdürülmesine yardımcı olmak ister misiniz?? Eğer ilgileniyorsanız, bana [Twitter](https://twitter.com/Syknapse)'dan DM atabilir ve [klavuz](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/maintainer_guide.md)'u inceleyebilirsiniz.

## Giriş

Bu eğitim aracılığıyla Github üzerinde ilk kez katkıda bulunacak kişilerin, basit ve kolay bir projeye katılmalarına yardımcı olunması amaçlanmıştır.

Bu eğitim başka dillerde de mevcuttur [diğer diller](https://github.com/Syknapse/Contribute-To-This-Project/tree/master/translations) (Şimdilik [İngilizce](https://github.com/Syknapse/Contribute-To-This-Project), [Portekizce](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/PORTUGUESE.md), [İspanyolca](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/SPANISH.md), ve [İtalyanca](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/ITALIAN.md). Bu konuda çeviri destekleriniz memnuniyetle karşılanır).

### Hedefler

- Açık kaynaklı bir projeye katkıda bulunulması.
- GitHub'ta kullanım kolaylığı elde edilmesi.

### Bu eğitim kimler için?

- Eğitim yeni başlayanlar için olmak ile birlikte `<a href="" target=""></a>` bağlantı etiketini nasıl yazacağınızı ve düzenleyeceğinizi biliyorsanız, uygulamamızı başarabilirsiniz.
- Ayrıca biraz daha deneyim sahibi ancak ilk açık kaynak katkısını yapmak veya konu ile ilgili daha fazla güven ve ekstra deneyim amacıyla katkıda bulunmak isteyenler içindir.

### Neden bunu yapmam gerekiyor?

Hevesli veya deneyimli herhangi bir web geliştiricisinin Git versiyon kontrolünü ve herkes tarafından kullanılan en popüler Git barındırma hizmeti olan GitHub’ı kullanması gerekir. Github Aynı zamanda Açık Kaynak topluluğunun da kalbidir. GitHub'ı rahat kullanmak önemli bir beceridir. Github üzerinde bir projeye katkıda bulunmak kendinize olan güveninizi arttıracak ve size GitHub profilinizde sunabileceğiniz bir içerik vererek profil değerinizi arttıracaktır.<br>
Yeni bir geliştiriciyseniz, Git ve GitHub'ı öğrenmeniz gerekip gerekmediğini merak ediyorsanız işte cevap: [Git'i Dün Öğrenmiş Olmalıydın](https://codeburst.io/number-one-piece-of-advice-for-new-developers-ddd08abc8bfa 'New Developer? You should’ve learned Git yesterday. by Brandon Morelli, creator of CodeBurst.io').

## Ne katkıda bulunacağım?

![Katılımcı Kartı](/readme-only/card.PNG 'Kartica saradnika')

[Proje web sayfası](https://syknapse.github.io/Contribute-To-This-Project/ 'https://syknapse.github.io/Contribute-To-This-Project')'ndaki bunun gibi bir kartla katkıda bulunacaksınız. Üzerinde Adınızı, Twitter kullanıcı adınızı, kısa bir açıklamayı ve tavsiye ettiğiniz web geliştiricileri için faydalı kaynaklara yönelik 3 bağlantıyı içerecektir.

HTML dosyasının içindeki kart şablonunun bir kopyasını oluşturacak ve kendi bilgilerinizle özelleştireceksiniz.

## Hızlı Erişim Dizini

| <ul><li>[Giriş](#giriş)</li><li>[Ne katkıda bulunacağım?](#ne-katkıda-bulunacağım)</li><li>[Kurulum](#kurulum)</li><li>[Katkı &rightarrow;](#katkı)</li><li>[Sonraki adımlar](#sonraki-adımlar)</li><li>[Teşekkür](#teşekkür)</li></ul> | Katkı: <ul><li>[Adım 1: Bu depoyu çatallayın(fork)](<#adım-1-bu-depoyu-çatallayın(fork)>)</li><li>[Adım 2: Depoyu klonlayın(clone)](<#adım-2-depoyu-klonlayın(clon)>)</li><li>[Adım 3: Yeni bir şube(branch) oluşturun](<#adım-3-yeni-bir-şube(branch)-oluşturun>)</li><li>[Adım 4: index.html dosyasını açın](#adım-4-otvori-indexhtml-fajl)</li><li>[Adım 5: Kart şablonunu kopyalayın](#Adım-5-kart-şablonunu-kopyalayın)</li><li>[Adım 6: Değişikliklerinizi uygulayın](#adım-6-değişikliklerinizi-uygulayın)</li><li>[Adım 7: Değişikliklerinizi kabul edin(commit)](<#Adım-7-değişikliklerinizi-kabul-edin(commit)>)</li><li>[Adım 8: Değişikliklerinizi GitHub'a aktarın(push)](<#Adım-8-değişikliklerinizi-githuba-aktarın(push)>)</li><li>[Adım 9: Bir PR(Çekme İsteği) Gönderin(Pull Request)](<#Adım-9-bir-pr(çekmeisteği)-gönderin(pullrequest)>)</li><li>[Adım 10: Kutlama](#adım-10-kutlama)</li></ul> |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


## Kurulum

İlk önce uygulamamızı gerçekleştirmek için kurulumu yapalım

1. GitHub hesabınıza giriş yapın. Henüz bir hesabınız yoksa [Github'a kayıt ol](https://github.com/join). Devam etmeden önce [GitHub Merhaba Dünya eğitimi](https://guides.github.com/activities/hello-world/)ni yapmanızı tavsiye ediyoruz.
2. [GitHub Masaüstü](https://desktop.github.com/) uygulamasını indirin.
   - • Alternatif olarak, Git'i komut satırında kullanmakta rahatsanız, yapabileceğiniz [ilk katkılar](https://github.com/Syknapse/first-contributions), gerekli komutlar için rehber olarak hizmet edebilecek benzer bir projedir. VEYA
   - [VS Code](https://code.visualstudio.com/ 'Visual Studio Code website') kullanıyorsanız, VS Code entegre Git ile birlikte gelir ve ihtiyacımız olanı doğrudan düzenleyiciden yapmanızı sağlar.
   - Ancak bu eğitimi uygulamanın en basit ve en kolay yolu GitHub Desktop kullanmaktır.

Artık hazır olduğunuza göre, projeye katkıda bulunma işine geçebiliriz.

---

---

## Katkı

10 kolay adımda açık kaynağa katkıda bulunun.

_Tahmini süre: 30 dakikadan az_.

### Adım 1: Bu depoyu çatallayın(fork)

- Buradaki amaç, bu projenin bir kopyasını oluşturmak ve hesabınız bünyesine yerleştirmektir.
- GitHub'da bir proje depo(repo) olarak adlandırılmakta, çatal(fork) ise bunun kopyalanmasıdır.
- Bu reponun [ana sayfa](https://github.com/Syknapse/Contribute-To-This-Project 'https://github.com/Syknapse/Contribute-To-This-Project')'sında (main) olduğunuzdan emin olun.

| <ul><li>Fork butonuna basın</li></ul> | ![Fork](/readme-only/fork.png "klikni na 'Fork'") |
| :------------------------------------ | ------------------------------------------------: |


- Artık kendi hesabınızda projenin tam bir kopyasına sahipsiniz.

---

### Adım 2: Depoyu klonlayın(clone)

- Şimdi projenin yerel bir kopyasını oluşturmak istiyoruz. Yani kendi cihazımıza kaydedilmiş bir kopya.
- GitHub masaüstü uygulamasını açalım. Uygulamada:

| <ul><li>_Dosya_'ya ve ardından _Depoyu klonla_'ya tıklayın</li></ul> | ![Clone](/readme-only/clone.PNG 'klikni clone repository') |
| :------------------------------------------------------------------- | ---------------------------------------------------------: |


| <ul><li>GitHub'da projelerimizin ve forkladıklarımızın bir listesini göreceğiz.</li><li>`<github-kullanıcı-adı>/Contribute-To-This-Project` seçelim.</li><li>Klonlaya tıklayalım </li></ul> | ![Klonlaya tıklayalım](/readme-only/clone-project.PNG 'klikni na <your-github-username>/Contribute-To-This-Project') |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------: |
| <ul><li>Forklanmış bir projenin solunda çatal sembolü olacaktır..</li><li>Forkladığınız projenin kendi GitHub kullanıcı adı olacaktır.</li></ul>                                            |  ![vaše račvanje](/readme-only/clone-your-fork.PNG 'vaše račvanje će izgledati ovako, sa vašim korisničkim imenom')  |

- Proje sabit diskinize kopyalanırken bu biraz zaman alacaktır. Genellikle varsayılan dizini korumanız önerilmektedir. `..\Documents\GitHub`.
- Artık projenin yerel bir kopyasına sahipsiniz.

---

### Adım 3: Yeni bir şube(branch) oluşturun

- Depo klonlandıktan ve GitHub masaüstünde açıldıktan sonra yeni bir şube(branch) oluşturma zamanı gelmiştir.
- Dal(branch), değişikliklerinizi projenin `Master` adlı ana bölümünden ayrı tutmanın bir yoludur. Örneğin, işler ters giderse ve değişikliklerinizden memnun değilseniz, şubeyi silmeniz durumunda ana proje etkilenmeyecektir.

| <ul><li>_Mevcut şube_'ye(current) tıklayın</li><li>Ardından _Yeni_'ye tıklayın</li></ul> | ![Create branch](/readme-only/branch-new.PNG "Klikni na 'Branch', potom 'New'") |
| :--------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------: |


| <ul><li>Şubenize(branch) bir isim verin</li><li>`Create branch`'ı tıklayın </li></ul> | ![Naziv grane](/readme-only/branch-name.PNG 'Dajte naziv grani') |
| :------------------------------------------------------------------------------------ | ---------------------------------------------------------------: |


- İstediğiniz bir isim koyabilirsiniz, ancak bu dal(branch) projeye adınızın olduğu bir kart eklemek amacıyla olduğundan, `your-name-card` şeklinde isimlendirmek iyi bir uygulama olacağından bu dalın amacını açık tutar.

| <ul><li>Yeni şubenizi(branch) Github'da yayınlayın</li></ul> | ![Ime grane](/readme-only/branch-publish.PNG 'Kliknite na Objavi da biste novu granu poslali u vaš udaljeni repo na GitHub-u') |
| :----------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------: |


- Şimdi ana daldan ayrı yeni bir dal oluşturdunuz.
- Sonraki adımlar için bu dalda çalıştığınızdan emin olun. Bulunduğunuz şubenin adını GitHub masaüstü uygulamasının üst orta kısmında _Current branch_ şeklinde yazdığını göreceksiniz.

**Lütfen `master` branch üzerinde çalışmayın**

---

### Adım 4: index.html dosyasını açın

- Şimdi düzenleyeceğimiz dosyayı favori kod düzenleyicinizle açmanız gerekiyor.
- Bilgisayarınızdaki proje klasörünü bulun. Varsayılanı koruduysanız bu şöyle bir şey olmalıdır `your-computer > Documents > GitHub > Contribute-To-This-Project`
- `index.html` dosyası doğrudan `Contribute-To-This-Project` klasöründedir.

| <ul><li>Kod düzenleyicinizi (Sublime, VS Code, Atom..etc) açın ve `Open file` komutunu kullanın ve index.html dosyasını projenin ana dizininde bulun.</li><li>Alternatif olarak, dosyayı sabit sürücünüzde bulabilir, sağ tıklayıp düzenleyicinizle açabilirsiniz.</li></ul> | ![Otvori index fajl](/readme-only/index-open.PNG 'Otvori index.html u svom text editoru') |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------: |


- Artık düzenleyeceğiniz dosya düzenleyicinizde açık ve üzerinde değişiklik yapmaya hazırsınız.

---

### Adım 5: Kart şablonunu kopyalayın

- Üzerinde çalışmaya başlamak için kart şablonunun bir kopyasını oluşturacağız

| <ul><li>Html dosyasının en üstünde, `<head>` ve `<header>` bölümlerinin altında `== TEMPLATE ==` etiketli bölümü bulacaksınız. </li><li>`Contributor card START` yorumundan `Contributor card END` yorumuna, resimdeki kırmızı kare içindeki her şeyi kopyalayın.</li></ul> |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Kopirajte šablon kartice](/readme-only/card-copy.PNG 'Kopirajte šablon kartice')                                                                                                                                                                                          |

| <ul><li>Her şeyi doğrudan yapıştırılacak yeri belirten yorumun altına yapıştırın.</li><li>Kartın başlangıcının öncesi ile sonununun ardında tek bir satır boşluk olduğundan emin olun. Bu kodumuzu olabildiğince okunabilir tutmak için iyi bir uygulamadır.</li><li>Asla linter veya stil formatlayıcı kullanmayın. Proje daha güzel bir kuruluma sahiptir.</li></ul> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Nalepite šablon kartice](/readme-only/card-paste.PNG 'Zalepite ispod naznačene linije')                                                                                                                                                                                                                                                                              |

- Artık, kişiselleştirmeniz ve düzenlemeniz için size ait **kartınız** var.

---

### Adım 6: Değişikliklerinizi uygulayın

- Şimdi kartımızdaki özelleştirilebilir alanları değiştirerek html düzenlemeye başlayacağız.

| <ul><li>'Name' kısmını adınız ile değiştirin</li><li>Not: `class="name" değiştirilmemelidir`</li></ul> | ![Promeni ime](/readme-only/change-name.PNG 'Ukucaj svoje ime') |
| :----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------: |


| <ul><li>Twitter hesabınızın URL'sini girin `href="Insert URL here"`</li><li>Kullanıcı adınızı(handle) metin alanına yazın</li></ul> |
| :---------------------------------------------------------------------------------------------------------------------------------- |
| ![Promeni kontakt](/readme-only/change-contact.PNG 'Umetnite vezu do svog Tvitter naloga i otkucajte svoje tviter username')        |

- Twitter dışında bir platform kullanmayı tercih ederseniz twitter simgesini değiştirmeniz gerekecektir `<i class="fa fa-twitter"></i>`. [Font Awesome Icons](http://fontawesome.io/icons/)'a giderek doğru simgeyi bulmanız sonrasında yalnızca `fa-twitter` bölümünü örneğin `fa-facebook` gibi yeni simgeyle değiştirebilirsiniz.

| <ul><li>Bize kendin hakkında birşeyler söyle</li><li>Kısa ve güzel tut. Bunu blog gönderisinden çok bir tweet gibi düşünebilirsiniz</li></ul> | ![Promeni o sebi](/readme-only/change-about.PNG 'Napiši rečenicu o sebi') |
| :-------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------: |


| <ul><li>Web geliştirme için yararlı olan 3 kaynağa ait bağlantının topluluk ile paylaşılması</li><li>Bu herhangi bir şey, video, konuşma, podcast, makale, referans veya araç olabilir</li><li>Yeni başlayan biriyseniz, bundan korkmayın, basit olduğunu düşünseniz bile bildiklerinizi paylaşın. Kaç kişinin faydalanacağına şaşıracaksınız</li></ul> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![izmeni resurse](/readme-only/change-resources.PNG 'Umetnite vezu, napišite kratak opis i otkucajte naziv resursa')                                                                                                                                                                                                                                    |
| <ul><li>Link: `#` değiştirilerek buraya bağlantı eklenir `href="here"`</li><li>Title: Kısa bir başlık açıklaması yazın `title="here"`</li><li>Name: Metin alanına kaynağın adını yazın `>here</a>`</li></ul>                                                                                                                                            |

- Tüm değişikliklerinizi **kaydettiğinizden emin olun**.
- **Değişikliklerinizi test edin**. BU ÖNEMLİ! Html dosyasını tarayıcınızda açın (üzerine çift taklayarak açabilirsiniz) ve kartınızın sitede nasıl görüneceğine bakın. Bağlantılarınızı tıklayın ve çalıştıklarından emin olun. Konsolu açın (Ctrl + Shift + J (Windows / Linux) veya Cmd + Opt + J (Mac)) ve hata mesajı olmadığını kontrol edin.
- Harika, kodunuzu düzenlemeyi bitirdiniz! Sonraki adımlarda, değişikliklerinizi GitHub'a gönderecek ve ardından ana projeyle birleştirilmek(merge) üzere sunacaksınız.

---

### Adım 7: Değişikliklerinizi kabul edin(commit)

- GitHub masaüstü uygulamasına geri dönün.
- Değişiklikleriniz staging alanına otomatik olarak eklenecektir.
- Bu, Git'in şuana kadar mevcut gerçekleştirilen tüm değişiklikleri **kaydettiği** anlamına gelir.
- Bunun uygulamaya yansıdığını görebilirsiniz. Dosyaya eklediğiniz her şey yeşil olacak ve silme işlemleri kırmızı olarak gösterilecektir.

| <ul><li>Bir sonraki adıma _Commit_ denir </li><li>Bu kabaca "değişiklikleri onayla" anlamına gelir</li></ul> | ![Komituj promene](/readme-only/commit.PNG 'Promene koje ste dodali trebalo bi da se pojave u zelenoj boji na desnoj strani GitHub desktop aplikacije. Dugme za komitovanje se nalazi u donjem levom uglu') |
| :----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


| <ul><li>GitHub masaüstü başlığınız böyle görünmelidir</li><li>`Geçerli depoda` proje adının yanındaki çatal sembolüne dikkat edin</li><li>`Mevcut şubeniz` 3. adımda verdiğiniz isme sahip olacaktır</li></ul>    |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Komituj promene](/readme-only/commit-header.PNG 'Promene koje ste dodali trebalo bi da se pojave u zelenoj boji na desnoj strani GitHub desktop aplikacije. Dugme za urezivanje se nalazi u donjem levom uglu') |

| <ul><li>Taahhüt(commit) etmek için _Summary_(özet) alanını doldurmalısınız</li><li>Bu, neyi değiştirdiğinizi açıklayan taahhüt mesajıdır</li><li>Bu durumda "Kart bilgilerimi ekle" mantıklı bir mesaj olacaktır</li><li>İsteğe bağlı olarak daha ayrıntılı bir _Açıklama_ ekleyebilirsiniz.</li><li>_Commit_ butonuna basınız Butonda şöyle bir şey yazacaktır `Commit to "your-branch-name"`</li></ul> | ![commit-message](https://user-images.githubusercontent.com/16895546/146438169-50b8596a-c622-4474-a5fb-fe0be7e3c10d.png) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------: |


---

### Adım 8: Değişikliklerinizi GitHub'a aktarın(push)

- Değişiklikleriniz artık kaydedildi veya taahhüt(commit) edildi. Ancak bunlar yalnızca yerel olarak, yani bilgisayarınızda kaydedilmiştir.
- Yerel değişiklikleri Github'daki deponuzla senkronize etmeye _Push_ denir. Yerel deponuzdaki değişiklikleri Github'taki uzak depoya "ittirme(pushlama)" işlemi gerçekleştirilecektir.

| <ul><li>_Push_ Butonuna tıklayınız</li></ul> | ![Pušuj na GitHub](/readme-only/push.PNG "Pošalji svoje promene na GitHub, klikni na 'Push' dugme") |
| :------------------------------------------- | --------------------------------------------------------------------------------------------------: |


- Birkaç saniye sonra işlem tamamlanır ve artık bu dalın(branch) tam olarak aynı kopyası hem makinenizde hem de GitHub'da bulunur.

---

### Adım 9: Bir PR(Çekme İsteği) Gönderin(Pull Request)

- İşte beklediğiniz an; _Pull Request_ gönderme zamanı.
- Şimdiye kadar yaptığınız tüm işler, hatırladığınız gibi kendi GitHub hesabınızda bulunan çatallanmış proje dahilindeydi(fork).
- Şimdi, değişikliklerinizi birleştirilecek ana projeye gönderme zamanı.
- Orijinal proje yürütücüsünden, gerçekleştirmiş olduğunuz değişikliklerinizi projelerine "çekmesini" istediğiniz için buna [_Pull Request_](https://help.github.com/articles/about-pull-requests/ 'About Pull Requests - GitHub Help') denir.
- GitHub'da çatalınızın ana sayfasına gidin (üstte çatal simgesi ve kendi kullanıcı adınız olacaktır).
- Deponun üst kısmına doğru, yeşil bir düğme ile vurgulanmış bir çekme talebi mesajı göreceksiniz. (Pull request)

| <ul><li>`Compare and pull request` butonuna tıklayınız</li></ul> | ![Submit a Pull Request](/readme-only/pull-request.PNG 'Ovo se obično nalazi na vrhu stranice, ispod opisa i iznad projektnih datoteka i fascikli') |
| :--------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------: |


| <ul><li>`Open a pull request` sayfası bu şekilde gözükmektedir.</li><li>UNUTMAYIN, dalınızı çatalınızdaki `Master` dalıyla değil, orijinal projeyle birleştirmeye çalışıyorsunuz.</li><li>Aşağıdaki resim, çekme isteğinizin başlığının nasıl görünmesi gerektiği hakkında bir fikir verecektir.</li><li>Solda orijinal proje ve ardından ana dal bulunur. Sağda ise çatalımız ve oluşturduğumuz dal vardır.</li></ul> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Open a Pull Request](/readme-only/pull-request-branches.PNG 'Zahtevate da spojite svoju granu sa vaše vilice u glavnu granu originalnog projekta')                                                                                                                                                                                                                                                                   |

| <ul><li>Çekme(Pull request) isteği oluşturun</li><li>Bir başlık yazın</li><li>Açıklamaya isteğe bağlı bilgiler ekleyin</li><li>`Create pull request` butonuna tıklayın</li></ul> | ![Submit a Pull Request](/readme-only/pull-request-open.PNG 'Kliknite yeleno dugme. Nemojte se plašiti!') |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------: |


- Tüm seçenekler sizi şaşırtmasın. Şimdilik sadece bu üç adımı yapmanız gerekiyor.
- `Allow edits from maintainers` (Bakımcıların düzenlemelerine izin ver) seçeneğini işaretli bırakın.
- Şimdi, proje yürütücüsüne bir _Pull Request_(Çekme talebi) gönderilecektir. İncelenip kabul edildiği anda değişiklikleriniz [proje web sayfası](https://syknapse.github.io/Contribute-To-This-Project 'Contribute To This Project web page')'nda görünecektir.

---

### Adım 10: Kutlama

Bu kadar. Başardın! GitHub'ta açık kaynağa katkıda bulundunuz.

Canlı bir web sayfasına kod eklediniz: [https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project)

Değişiklikleriniz **hemen görünmeyecektir**; öncelikle proje yürütücüsü tarafından gözden geçirilip kabul edilmeli ve birleştirilmelidir(merge). Bir kez birleştirildikten sonra kartınız sayfada görünür ve canlı olacaktır.

Gözden geçiren kişinin bir PR üzerinde değişiklik istemesi çok normaldir. Başınıza gelirse iyi bir uygulama olarak düşünün. Yorumlara ve istenen değişikliklere dikkat edin. İstenen değişiklikleri yaptıktan sonra (size ait branch'a geri döndüğünüzde) tek yapmanız gereken değişikliklerinizi taahhüt(commit) etmek ve push etmektir. PR, yeni değişikliklerle otomatik olarak güncellenecektir.

En kısa zamanda incelemeye ve birleştirmeye çalışacağıma söz veriyorum ama bunu boş zamanlarımda yapıyorum, bu yüzden birkaç gün gecikme kaçınılmaz.

---

---

## Sonraki adımlar

- Merge edilmiş Çekme Talebinizi(pull request) kontrol etmek için bir süre sonra tekrar gelin.
- Değişiklikleriniz onaylandığında veya ek değişiklikler istendiğinde GitHub'dan bir e-posta almalısınız. Ve aynı zamanda PR nihayet master ile birleştiğinde ve kartınız eklendiğinde de.
- Bu projeyi faydalı bulduysanız, lütfen sayfanın üst kısmına bir ⭐ yıldız ⭐ verin ve projenin yayılmasına yardımcı olmak için bu konuda **Tweet** atın.[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweet this project')
- Beni **takip edebilir** ve [Twitter](https://twitter.com/Syknapse '@Syknapse') veya [bu diğer seçenekler](https://syknapse.github.io/Syk-Houdeib/#contact 'My contact section | Portfolio')den herhangi birini kullanarak iletişime geçebilirsiniz.
- Bu açık kaynaklı bir projedir, dolayısıyla kartınız ile katkıda bulunmanın yanı sıra hataları düzeltmeye, iyileştirmelere veya yeni özellikleri eklemeye yardımcı olabilirsiniz. Bir [issue](https://help.github.com/articles/creating-an-issue/ 'Mastering Issues | GitHub Guides') açabilir ve [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/ 'Creating a pull request from a fork | GitHub Help') gönderebilirsiniz.
- Topluluğumuzu geliştirmeye yardımcı olmak için çekme isteklerinin yanında bulunan Github [Tartışmalar](https://github.com/Syknapse/Contribute-To-This-Project/discussions) sekmesine bakabilirsiniz. Bu alan kendinizi tanıtabileceğiniz, açık kaynak hakkında daha derin tartışmalara girebileceğiniz ve proje sorumluları ile iletişim kurabileceğiniz bir yerdir. Bu özelliği geliştirmemize ve topluluğumuzu geliştirmemize yardım edecek misiniz? -**Bu projeye katkıda bulunduğunuz için teşekkür ederiz**. Şimdi devam edebilir ve diğer projelere katkıda bulunmayı deneyebilirsiniz; acemi dostu katkı seçenekleri için [Good First Issue](https://user-images.githubusercontent.com/29199184/33852733-e23b7070-debb-11e7-907b-4e7a03aad436.png) etiketini arayabilirsiniz.
- Ayrıca, PR'leri gözden geçirme ve birleştirme konusunda bana yardım edecek ortak çalışma arkadaşları arıyorum. Daha gelişmiş Git alıştırması yapmak istiyorsanız, lütfen bana Twitter'dan bir DM atın ve [maintainer's guide](maintainer_guide.md) kaynağını okuyun.

## Teşekkür

Bu proje büyük ölçüde [Roshan Jossey](https://github.com/Roshanjossey)'in mükemmel eğitimlere sahip [first-conributions](https://github.com/Roshanjossey/first-contributions) projesinden esinlenmiştir.

Ayrıca, özellikle [#GoogleUdacityScholars](https://twitter.com/hashtag/GoogleUdacityScholars?src=hash) The Google Challenge Scholarship: Front-End Web Dev, 2017 Avrupa kümesindeki büyük topluluktan ilham almıştır.

## Lisans

[MIT License](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/LICENSE)

[Başa dön &uparrow;](#Giriş)
