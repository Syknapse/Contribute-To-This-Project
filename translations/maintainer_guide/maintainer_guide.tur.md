# Bakım Kılavuzu

Bu kılavuz, topluluğun projeyi yönetmek ve sürdürmek için yardımcı olarak projeye katılmak isteyenler için hazırlanmıştır. (Bu, **ilk kez katkıda bulunanlar** için bir kılavuz değildir)

## Çeviriler

Bu öğretici aynı zamanda [diğer dillerde](translations/README.md) de mevcuttur

| [İngilizce](maintainer_guide.md)   | [Bangla](translations/maintainer_guide/maintainer_guide.ben.md) | [Geleneksel Çince](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [Almanca](translations/maintainer_guide/maintainer_guide.ger.md) | [Hintçe](translations/maintainer_guide/maintainer_guide.hin.md) |
| :---: | :---: | :---: | :---: | :---: |
| [İtalyanca](translations/maintainer_guide/maintainer_guide.ita.md) | [Japonca](translations/maintainer_guide/maintainer_guide.jpn.md) | [Portekizce](translations/maintainer_guide/maintainer_guide.por.md) | [Ukraynaca](/translations/maintainer_guide/maintainer_guide.ukr.md) |
| [Türkçe](translations/maintainer_guide/maintainer_guide.tur.md) |

> Projelerin dokümantasyonları için çevirilere açığız. Katkıda bulunmak için [`Çeviri Kılavuzu`](translations/README.md)'nu okuyun.

---

## Hedefler

Ana hedefimiz katkıda bulunanlarımıza, çekme isteği (PR) oluşturdukları andan itibaren en hızlı geri bildirimi sunmaktır. Bu, genellikle kod incelemeleri yapmayı ve kabul edilen PR'ları birleştirmeyi içerir.  
Ayrıca, projenin düzgün çalıştığından ve katkıda bulunanlarımız için ne kadar yardımcı ve faydalı olabileceğinden emin olmak da projeyi sürdürmek anlamına gelir.

## Bu Kimler İçin?

Biraz Git ve GitHub becerisine sahip herkes için. Uzman olmanız gerekmez, bu kılavuz, hatta acemilerin yardımına ihtiyaç duyan bir aktif proje için yardımcı olmalıdır. Bu projede bir bakım görevlisi olarak yer almak, katkıda bulunanlarımıza iyi bir ilk deneyim sunmaya devam ettiğinden ve daha fazla katkıda bulunmalarını teşvik ettiğinden emin olmanıza yardımcı olur.

Bu işe ne kadar zaman ayıracağınız size bağlıdır. Aramızda işi sorunsuz bir şekilde sürdürebilmeliyiz.

## Metodoloji

- Projelerin çekme isteği (PR) bölümüne gidin ve "değişiklikler istendi" durumunda olmayan en eski çekme isteğiyle başlayın.
- Bir PR açın ve dosya değişiklikleri sekmesine gidin ve bir kod incelemesi başlatın.
- PR'yi kontrol edin, belgedeki özellikleri takip ettiğinden emin olun.
- HTML'nin, bağlantıların ve verilerin hepsinin doğru olduğundan emin olun. Kartın, nerede olması gerektiği gibi, dosyanın başına yerleştirildiğinden emin olun.
- Sonraki adım, çakışmaları kontrol etmek. `master`'ı PR dalına birleştirerek çakışmaları giderin. Çakışmalar genellikle önceki birleştirmelerden uzun bir süre geçtiğinde ve birçok PR aynı eski sürümü kullanıyorsa meydana gelir.
- Bu durumdaysa çakışmayı düzeltin. Genellikle çakışmaları düzeltmek için çatalın yapıldığından bu yana eklenen kartların üzerine yeni kart eklemeniz gerekecektir.
- Her şey diğer açılardan uygunsa, PR'yi onaylayın, katkıda bulunanı katkıları için teşekkür eden bir ileti yazın (ilk kez katkıda bulunan olduklarını unutmayın) ve PR'yi `master`'a birleştirin.

## Değişiklikler İsteme

- Bazen PR'lerle ilgili sorunlar vardır ve bunlar katkıda bulunan tarafından düzeltilmelidir, örneğin yanlış dal kullanımı, bozuk HTML, eksik bilgi, kartın yanlış yerleştirilmesi. Kılavuzun doğru bir şekilde izlenmediği herhangi bir şey (ve basit birleştirme çakışmaları değilse).
- GitHub'da bir kod incelemesi başlatın ve değişiklikler isteyin. Mümkün olduğunca açıklayıcı olmaya çalışın, tam olarak nerede hata olduğunu yorumlayın, sorunu tam olarak nasıl düzelteceklerini ve bu sürecin normal bir PR inceleme sürecinin bir parçası olduğunu anlatın ve onları cesaretlendirin.
- İncelemeyi göndermeye hazır olduğunuzda gönderin.
- Katkıda bulunanın size yardımcı olabileceği takip soruları varsa konuşmayı takip edin. Amacımız herkesi hedefe ulaştırmak, bu yüzden onları tüm yol boyunca yönlendirmeye çalışırız.
- İstenen değişiklikleri düzelttiklerinde PR, `master`'a birleştirilebilir.

Lütfen her zaman değişikliklerin projeyi bozmadığını ve canlı sayfanın beklenildiği gibi çalıştığından emin olun. Değişiklikleri birleştirmeden önce her
