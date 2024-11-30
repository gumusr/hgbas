// Kişi verilerini burada doğrudan tanımlıyoruz
const kisiVerisi = {
    "Ahmet": { soyisim: "Yılmaz", bilgi: "Ahmet Yılmaz, yazılım geliştirici." },
    "Ayşe": { soyisim: "Kara", bilgi: "Ayşe Kara, grafik tasarımcı." },
    "Mehmet": { soyisim: "Çelik", bilgi: "Mehmet Çelik, sistem yöneticisi." },
    "Ali": { soyisim: "Demir", bilgi: "Ali Demir, veritabanı yöneticisi." }
};

function ara() {
    // Kullanıcının girdiği isim ve soyisim değerlerini al
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;

    // Sonuç kutusunu al
    var sonucDiv = document.getElementById("sonuc");

    // Veritabanında kişi araması
    if (kisiVerisi[isim] && kisiVerisi[isim].soyisim === soyisim) {
        sonucDiv.innerHTML = kisiVerisi[isim].bilgi;
        sonucDiv.style.display = 'block'; // Sonuç kutusunu göster
    } else {
        sonucDiv.innerHTML = "Kişi bulunamadı.";
        sonucDiv.style.display = 'block'; // Sonuç kutusunu göster
    }
}
