// Kişi verilerini burada doğrudan tanımlıyoruz
const kisiVerileri = [
    { "İsim": "Ahmet", "Soyisim": "Yılmaz", "Email": "ahmet@example.com", "Telefon": "555-1234" },
    { "İsim": "Mehmet", "Soyisim": "Öztürk", "Email": "mehmet@example.com", "Telefon": "555-5678" },
    { "İsim": "Ayşe", "Soyisim": "Kaya", "Email": "ayse@example.com", "Telefon": "555-8765" },
    { "İsim": "Fatma", "Soyisim": "Demir", "Email": "fatma@example.com", "Telefon": "555-4321" }
];

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
