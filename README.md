# Yâren Kahve — Mini Case Study Raporu

> **"Her fincanda ortak bir hikâye."**  
> Geleneksel Türk kahvesi kültürünü espresso ve 3. nesil modern demleme sanatıyla aynı masada buluşturan **Yâren** markası için geliştirilmiş, modern, sıcak ve tam duyarlı (responsive) tek sayfa web uygulaması.

🌐 **Canlı Site (Live Demo):** [https://kucukagtas.github.io/yaren_markaForce/](https://kucukagtas.github.io/yaren_markaForce/)

---

## 1. Yönetici Özeti

Bu projede, geleneksel Türk kahvesi samimiyetini modern kahve demleme kültürüyle harmanlayan hayali **Yâren** markası için **HTML5, CSS3, Bootstrap 5 ve yalın (Vanilla) JavaScript** kullanılarak tek sayfalık (`100vh` tam ekran akışlı), mobil uyumlu bir web sitesi geliştirilmiştir. Tasarımda kırık beyaz, zeytin yeşili, sıcak sarı ve koyu ahşap kahve tonlarından oluşan renk paleti; *Playfair Display* ve *Plus Jakarta Sans* tipografileriyle birleştirilerek hem geleneksel hem çağdaş bir atmosfer kurulmuştur. Sayfa içerisinde 3 boyutlu döndürülebilir (3D flip) hikâye kartları, kesintisiz panoramik gradyan geçişleri, 6 ürünlük dikey menü seçkisi, `IntersectionObserver` tabanlı ilk açılış yükleme (scroll reveal) animasyonları ve istemci taraflı doğrulama yapan çift animasyonlu iletişim formu yer almaktadır. Proje herhangi bir sunucu veya derleme (build) adımına ihtiyaç duymadan doğrudan tarayıcıda çalışmakta olup GitHub Actions ile otomatik olarak canlıya (GitHub Pages) alınacak şekilde yapılandırılmıştır.

---

## 2. Görsel Yön ve Tasarım Kararları

Case Study dokümanında belirtilen görsel kimlik doğrultusunda aşağıdaki tasarım sistemi uygulanmıştır:

| Renk Rolü | Hex Kodu | CSS Değişkeni | Kullanım Alanı |
| :--- | :--- | :--- | :--- |
| **Zeytin Yeşili** | `#AEAC78` | `--main-green` | Navbar, vurgu çerçeveleri, başarı durumları |
| **Kırık Beyaz / Krem** | `#FCF0DA` | `--main-light` | Ana sayfa zemini, açık renkli metinler |
| **Sıcak Sarı / Hardal** | `#F2C46A` | `--main-yellow` | Birincil aksiyon butonları (CTA), fiyat etiketleri, başlık vurguları |
| **Koyu Kahve / Ahşap** | `#4C4541` | `--main-black` | Ana metin rengi, footer zemini, derinlik katmanları |

- **Tipografi Hiyerarşisi:** Marka başlıkları, slogan ve navigasyon bağlantılarında geleneksel ağırlığı yansıtan **Playfair Display (Serif / Italic)**; açıklama metinleri ve form elemanlarında ise yüksek okunabilirlik sağlayan **Plus Jakarta Sans (Sans-Serif)** tercih edilmiştir.

---

## 3. Sayfa Mimarisi ve Geliştirilen Özellikler

Her bölüm, masaüstü görünümde ekran yüksekliğini (`min-height: 100vh`) eksiksiz dolduracak ve bölümler arasında kopukluk oluşturmayacak şekilde kurgulanmıştır:

### 3.1. Matematiksel Merkezli & Dinamik Navbar
- **3 Sütunlu CSS Grid (`1fr auto 1fr`):** Sol (`Başlangıç`, `Hikayemiz`) ve sağ (`Keşif`, `Menü`) bağlantıların uzunluğundan bağımsız olarak ortadaki **Yâren** logosu ve sloganı ekranın matematiksel merkezine sabitlenmiştir.
- **Scroll Küçülme Etkisi:** Sayfa `20px` aşağı kaydırıldığında navbar `.navbar-shrink` sınıfını alarak daralır ve buzlu cam (`backdrop-filter: blur(10px)`) efekti kazanır.

### 3.2. Başlangıç / Hero Bölümü (`#intro`)
- Kahve çekirdeği arka plan görseli ve koyu kontrast katmanı üzerinde marka adı (**Yâren**), slogan (*"Her fincanda ortak bir hikâye."*) ve kullanıcıyı doğrudan ürün menüsüne (`#menu`) yönlendiren **"Kahveleri Keşfet"** ile **"Hikâyemizi Keşfet"** butonları yer alır.

### 3.3. Hikâyemiz Bölümü & Panoramik 3D Flip Kartlar (`#about-us`)
- **Gelenek (Türkiye)**, **Birleşim (Akdeniz)** ve **Modern (İtalya)** temalarını temsil eden 3 adet 3D döndürülebilir (`rotateY(180deg)`) kart tasarlanmıştır.
- **Panoramik Tekil Gradyan Tekniği:** 3 kart ayrı ayrı renklendirilmek yerine `background-size: 300% 100%` ve `background-position` (`0%`, `50%`, `100%`) kullanılarak tek bir koyu tematik gradyanın üç parçası şeklinde kodlanmıştır. Böylece bir kartın bittiği renk tonu, yanındaki kartın başladığı renk tonuyla kesintisiz devam eder.

### 3.4. Keşif Bölümü (`#discover`)
- Kahvenin topraktan fincana yolculuğunu **Nitelikli Çekirdek Seçkisi**, **Usta Kavrum Dengesi** ve **Zanaatkâr Demleme** başlıklarıyla sunan 3'lü bilgi kartı yapısı.

### 3.5. Kahve Menüsü (`#menu`)
- Case Study'de zorunlu tutulan **Türk Kahvesi, Espresso ve Filtre Kahve** ile birlikte **V60 Pour Over, Flat White ve Cold Brew** ürünlerini içeren **2 satır × 3 sütun** dikey kart düzeni.
- Her kartta ürün görseli, ürün adı, kısa aroma/demleme açıklaması ve fiyat bilgisi bulunur.

### 3.6. Tam Genişlikte (Full-Bleed) İletişim Formu & Footer (`#contact-footer`)
- **%50 Görsel / %50 Form Düzeni:** Ekran yatayda kenarlara sıfır olacak şekilde ikiye bölünmüştür; sol yarıda atmosfer görseli, sağ yarıda ise iletişim formu yer alır.
- **İstemci Taraflı Doğrulama & İki Farklı Animasyon:**
  - **Hatalı Gönderim (`animate-shake`):** Ad, e-posta (Regex kontrolü) veya mesaj alanlarından biri boş/geçersiz bırakıldığında form yatayda sallanır ve kırmızı hata bildirimi gösterilir.
  - **Başarılı Gönderim (`animate-success`):** Tüm alanlar geçerli olduğunda form yeşil onay efektiyle parlar, kullanıcının adıyla kişiselleştirilmiş başarı mesajı görüntülenir ve form sıfırlanır.

### 3.7. Kullanıcı Deneyimi (UX) Detayları
- **Tek Seferlik Scroll Reveal:** `IntersectionObserver` API ile sayfa ilk kez aşağı kaydırıldığında başlıklar ve kartlar `0.12s` kademeli gecikmeyle (staggered) yumuşakça yüklenir; elemanlar bir kez görüntülendikten sonra `unobserve` edilerek tekrar eden animasyon kalabalığı önlenir.
- **En Başa Dön Butonu:** Sayfa `350px` aşağı kaydırıldığında sağ alt köşede beliren ve tıklandığında sayfayı yumuşakça en üste taşıyan yardımcı buton.

---

## 4. Kullanılan Teknolojiler ve Araçlar

- **HTML5:** Semantik etiket yapısı ve erişilebilir (`aria-label`, `tabindex`) bileşenler.
- **CSS3:** Özel değişkenler (`:root`), CSS Grid, Flexbox, 3D perspektif dönüşümleri (`preserve-3d`, `backface-visibility`) ve `@keyframes` animasyonları.
- **Bootstrap 5.3:** Duyarlı (responsive) ızgara sistemi ve mobil menü (Collapse) altyapısı.
- **Vanilla JavaScript (ES6+):** Harici JS bağımlılığı olmadan DOM yönetimi, form doğrulama ve `IntersectionObserver` entegrasyonu.
- **Font Awesome 6.5 & Google Fonts:** İkon seti ve tipografi ailesi.

---

## 5. Proje Dizin Yapısı

```text
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages otomatik dağıtım (CI/CD) iş akışı
├── css/
│   └── style.css            # Özel tema değişkenleri, 3D kartlar, animasyonlar ve responsive kurallar
├── details/
│   ├── Yaren_Case_Study.pdf # Görev dokümanı
│   └── Color Hunt Palette.png
├── img/                     # Marka illüstrasyonları ve kahve görselleri
├── js/
│   └── script.js            # Navbar, mobil menü, 3D kart, form doğrulama ve scroll reveal kodları
├── index.html               # Ana sayfa yapısı
└── README.md                # Proje raporu ve çalıştırma kılavuzu
```

---

## 6. Çalıştırma Adımları

Proje herhangi bir paket yöneticisi veya derleme aracı gerektirmez. Aşağıdaki yöntemlerden biriyle saniyeler içinde çalıştırabilirsiniz:

1. **Doğrudan Tarayıcıda Açma:**
   Proje klasöründeki `index.html` dosyasına çift tıklayarak varsayılan web tarayıcınızda açın.

2. **Yerel Sunucu ile Çalıştırma (Önerilen):**
   VS Code **Live Server** eklentisiyle veya terminal üzerinden aşağıdaki komutla yerel sunucu başlatabilirsiniz:
   ```bash
   python3 -m http.server 8000
   ```
   Ardından tarayıcınızda `http://localhost:8000` adresini ziyaret edin.

