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

    // --- D. FAVORİLER (LOCAL STORAGE) İŞLEMİ ---
    
    // 1. Tarayıcı hafızasından favorileri getiren fonksiyon
    function favorileriGetir() {
        const favoriler = localStorage.getItem('korfezFavoriler');
        return favoriler ? JSON.parse(favoriler) : [];
    }

    // 2. Tarayıcı hafızasına favorileri kaydeden fonksiyon
    function favorileriKaydet(favoriler) {
        localStorage.setItem('korfezFavoriler', JSON.stringify(favoriler));
        favoriArayuzunuGuncelle();
    }

    // 3. Menüdeki sayacı ve sağdan açılan çekmecenin içini güncelleyen fonksiyon
    function favoriArayuzunuGuncelle() {
        const favoriler = favorileriGetir();
        
        // Menüdeki kırmızı sayacı güncelle (Geri Bildirim Kuralı)[cite: 1]
        const favoriSayaci = document.getElementById('favoriSayaci');
        if(favoriSayaci) {
            favoriSayaci.textContent = favoriler.length;
        }

        // Çekmece içini çiz
        const favorilerListesi = document.getElementById('favorilerListesi');
        if(favorilerListesi) {
            if(favoriler.length === 0) {
                favorilerListesi.innerHTML = '<p class="text-center mt-5" style="color: #C5A059 !important; font-weight: 500;">Henüz favoriye eklediğiniz bir ilan bulunmuyor.</p>';
                } else {
                favorilerListesi.innerHTML = ''; // İçini temizle
                // Favorideki her bir ilan ID'si için küçük bir kart oluştur
                favoriler.forEach(id => {
                    const ilan = ilanVerileri[id];
                    if(ilan) {
                        favorilerListesi.innerHTML += `
                            <div class="card mb-3 shadow-sm border-0 bg-light">
                                <div class="row g-0 align-items-center">
                                    <div class="col-4">
                                        <img src="${ilan.resim}" class="img-fluid rounded h-100" style="object-fit: cover; min-height: 80px;" alt="İlan Resmi">
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body p-2">
                                            <h6 class="card-title fw-bold mb-1" style="font-size: 0.85rem;">${ilan.baslik}</h6>
                                            <p class="text-primary fw-bold mb-1 small">${ilan.fiyat}</p>
                                            <div class="d-flex gap-1">
                                                <a href="detay.html?id=${id}" class="btn btn-sm btn-outline-primary flex-grow-1" style="font-size: 0.75rem;">İncele</a>
                                                <button onclick="favoridenCikar('${id}')" class="btn btn-sm btn-danger" style="font-size: 0.75rem;"><i class="bi bi-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                });
            }
        }
    }

    // 4. Çekmecedeki Çöp Kutusuna basınca ilanı silen fonksiyon
    window.favoridenCikar = function(id) {
        let favoriler = favorileriGetir();
        favoriler = favoriler.filter(favId => favId !== id);
        favorileriKaydet(favoriler);
        
        // Eğer detay sayfasındayken siliyorsak, o sayfadaki butonun rengini de eski haline getir
        const favoriyeEkleBtn = document.getElementById('favoriyeEkleBtn');
        const urlParams = new URLSearchParams(window.location.search);
        if(favoriyeEkleBtn && urlParams.get('id') === id) {
            favoriyeEkleBtn.innerHTML = '<i class="bi bi-heart"></i> Favorilere Ekle';
            favoriyeEkleBtn.classList.replace('btn-danger', 'btn-outline-danger');
        }
    };

    // Sayfa her yüklendiğinde sayacı ve çekmeceyi kontrol et
    favoriArayuzunuGuncelle();

    // 5. Detay sayfasındaki "Favoriye Ekle" butonuna basılma olayı (Geri Bildirim Kuralı)[cite: 1]
    const favoriyeEkleBtn = document.getElementById('favoriyeEkleBtn');
    if(favoriyeEkleBtn && document.getElementById('detayBaslik')) {
        const urlParams = new URLSearchParams(window.location.search);
        const ilanId = urlParams.get('id');

        // Sayfa ilk açıldığında ilan zaten favorilerdeyse butonu kırmızı yap
        let currentFavoriler = favorileriGetir();
        if(currentFavoriler.includes(ilanId)) {
            favoriyeEkleBtn.innerHTML = '<i class="bi bi-heart-fill"></i> Favorilerde';
            favoriyeEkleBtn.classList.replace('btn-outline-danger', 'btn-danger');
        }

        // Butona tıklandığında işlemi yap
        favoriyeEkleBtn.addEventListener('click', function() {
            let favlar = favorileriGetir();
            
            if(favlar.includes(ilanId)) {
                // Listede varsa çıkar
                window.favoridenCikar(ilanId);
            } else {
                // Listede yoksa ekle
                favlar.push(ilanId);
                favorileriKaydet(favlar);
                // Butonu görsel olarak doldur
                this.innerHTML = '<i class="bi bi-heart-fill"></i> Favorilerde';
                this.classList.replace('btn-outline-danger', 'btn-danger');
            }
        });
    }
});