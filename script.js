// ==========================================
// 1. İLAN VERİLERİ (Mini Veritabanımız)
// ==========================================
const ilanVerileri = {
    "1": {
        baslik: "Yahyakaptan'da Lüks 3+1",
        fiyat: "3.250.000 TL",
        m2: "140",
        oda: "3+1",
        konum: "Yahyakaptan",
        resim: "img/ev1.jpg",
        aciklama: "Yahyakaptan'ın en prestijli bölgesinde, alışveriş merkezlerine ve toplu taşımaya yürüme mesafesinde yer alan bu lüks dairemiz, yeni sahiplerini bekliyor. Site içerisinde 7/24 güvenlik, açık yüzme havuzu, kapalı otopark mevcuttur."
    },
    "2": {
        baslik: "Kartepe'de Müstakil Villa",
        fiyat: "8.500.000 TL",
        m2: "220",
        oda: "4+2",
        konum: "Kartepe",
        resim: "img/ev2.jpg",
        aciklama: "Doğa ile iç içe, kendine ait geniş bahçesi ve kış bahçesi bulunan harika bir villa. Temiz havası ve Kartepe manzarasıyla huzurlu bir yaşam sunar."
    },
    "3": {
        baslik: "Yuvam Akarca Manzaralı",
        fiyat: "15.000 TL / Ay",
        m2: "110",
        oda: "2+1",
        konum: "Yuvam Akarca",
        resim: "img/ev3.jpg",
        aciklama: "Ulaşıma yakın, önü kapanmaz deniz manzaralı ferah kiralık daire. Hastane ve okullara yürüme mesafesindedir."
    },
    "4": {
        baslik: "Başiskele Havuzlu 4+1",
        fiyat: "4.100.000 TL",
        m2: "180",
        oda: "4+1",
        konum: "Başiskele",
        resim: "img/ev4.jpeg",
        aciklama: "Başiskele sahile inen yolda, nezih bir site içerisinde sosyal donatıları tam, ebeveyn banyolu geniş aile evi."
    },
    "5": {
        baslik: "İzmit Merkez Ofis",
        fiyat: "25.000 TL / Ay",
        m2: "90",
        oda: "Bölmeli 3 Oda",
        konum: "İzmit Merkez",
        resim: "img/ev5.jpg",
        aciklama: "Çarşı içi, yürüyüş yoluna paralel, asansörlü plazada kurumsal firmalara uygun kiralık prestijli ofis katı."
    },
    "6": {
        baslik: "Derince Yatırımlık Arsa",
        fiyat: "1.850.000 TL",
        m2: "500",
        oda: "Arsa",
        konum: "Derince",
        resim: "img/ev6.jpg",
        aciklama: "İmara açık, altyapı sorunu olmayan, ana yola çok yakın mesafede geleceği parlak köşe parsel arsa."
    },
    "7": {
        baslik: "Sapanca Gölü Kenarı",
        fiyat: "12.000.000 TL",
        m2: "800",
        oda: "Tesis",
        konum: "Sapanca",
        resim: "img/ev7.jpg",
        aciklama: "Turizm ruhsatlı, göl kenarında, bungalov veya butik otel projesi yapımına uygun eşsiz konumda tesis alanı."
    },
    "8": {
        baslik: "Gölcük 2+1 Fırsat Daire",
        fiyat: "1.950.000 TL",
        m2: "95",
        oda: "2+1",
        konum: "Gölcük",
        resim: "img/ev8.jpg",
        aciklama: "Acil satılık, içi A'dan Z'ye yenilenmiş, masrafsız, çarşıya ve sahile çok yakın kelepir daire."
    }
};

// ==========================================
// 2. SAYFA YÜKLENDİĞİNDE ÇALIŞACAK İŞLEMLER
// ==========================================
document.addEventListener('DOMContentLoaded', function() {

    // --- A. İLANLAR SAYFASI: GERÇEK FİLTRELEME İŞLEMİ ---
    const searchForm = document.getElementById('searchForm');
    const locationSelect = document.getElementById('locationSelect');
    const typeSelect = document.getElementById('typeSelect');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Sayfanın yenilenmesini durdur
            
            const secilenKonum = locationSelect.value;
            const secilenTip = typeSelect.value;
            
            // "filter-item" class'ına sahip tüm ilanları bul
            const ilanKartlari = document.querySelectorAll('.filter-item');
            let gosterilenSayi = 0;

            // Her bir kartı tek tek kontrol et
            ilanKartlari.forEach(kart => {
                const kartKonum = kart.getAttribute('data-konum');
                const kartTip = kart.getAttribute('data-tip');

                // Seçimler boşsa (Tümü) veya kartın verisiyle eşleşiyorsa true döner
                const konumUygun = (secilenKonum === "" || secilenKonum === kartKonum);
                const tipUygun = (secilenTip === "" || secilenTip === kartTip);

                // Hem konum hem tip uyuyorsa kartı göster, uymuyorsa gizle
                if (konumUygun && tipUygun) {
                    kart.style.display = ''; // Görünür yap
                    gosterilenSayi++;
                } else {
                    kart.style.display = 'none'; // Gizle
                }
            });

            // Geri Bildirim (Feedback) kuralı için rozeti güncelle
            const badge = document.querySelector('.badge.bg-primary');
            if(badge) {
                badge.textContent = gosterilenSayi + " İlan Bulundu";
            }
        });
    }

    // --- B. İLETİŞİM SAYFASI: FORM GERİ BİLDİRİMİ ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Sayfanın yenilenmesini durdur
            
            // Bootstrap'in Modal özelliğini çağırıp ekranda gösteriyoruz
            const basariModali = new bootstrap.Modal(document.getElementById('basariModali'));
            basariModali.show();
            contactForm.reset();
        });
    }

    // --- C. DETAY SAYFASI: DİNAMİK İÇERİK DOLDURMA ---
    if(document.getElementById('detayBaslik')) {
        const urlParams = new URLSearchParams(window.location.search);
        const ilanId = urlParams.get('id');

        if(ilanId && ilanVerileri[ilanId]) {
            const ilan = ilanVerileri[ilanId];
            
            document.getElementById('detayBaslik').textContent = ilan.baslik;
            document.getElementById('detayBreadcrumb').textContent = ilan.baslik;
            document.getElementById('detayAciklama').textContent = ilan.aciklama;
            document.getElementById('detayFiyat').textContent = ilan.fiyat;
            document.getElementById('detayM2').textContent = ilan.m2;
            document.getElementById('detayOda').textContent = ilan.oda;
            document.getElementById('detayKonum').textContent = ilan.konum;
            document.getElementById('detayResim').src = ilan.resim;
        } else {
            document.getElementById('detayBaslik').textContent = "İlan Bulunamadı";
            document.getElementById('detayAciklama').textContent = "Lütfen tüm ilanlar sayfasına dönerek geçerli bir ilan seçiniz.";
        }
    }
});