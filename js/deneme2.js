

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.MuiIconButton-root'); // Hamburger menü ikonu
    const mobileMenu = document.getElementById('drawer'); // Mobil menü
    const overlay = document.createElement('div'); // Overlay oluştur
    overlay.style.display = 'none'; // Başlangıçta gizli
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.body.appendChild(overlay); // Overlay'i body'e ekle

    const menuClose = document.querySelector('.close-button'); // Menü kapama butonu
    const headerButtons = document.querySelector('.MuiStack-root.css-1gqi8mp'); // Header butonları
    const requestDemoButton = document.querySelector('.drawer-request-demo a'); // Request a Demo butonu

    // Başlangıçta mobil menü ve overlay gizlenmiş olmalı
    mobileMenu.style.display = 'none';

    // Menü açma
    menuIcon.addEventListener('click', function () {
        mobileMenu.style.display = 'block';
        overlay.style.display = 'block'; // Overlay'i göster
    });

    // Menü kapama
    menuClose.addEventListener('click', function () {
        mobileMenu.style.display = 'none'; // Menü gizle
        overlay.style.display = 'none'; // Overlay'i gizle
    });

    // Arka plan örtüsüne tıklama ile menüyü kapatma
    overlay.addEventListener('click', function () {
        mobileMenu.style.display = 'none'; // Menü gizle
        overlay.style.display = 'none'; // Overlay'i gizle
    });

    // Pencere boyutunu kontrol et ve menü ikonunun görünürlüğünü ayarla
    function adjustMenuIconVisibility() {
        if (window.innerWidth <= 768) { // Mobil görünüm için örnek: 768px ve altı
            menuIcon.style.display = 'block'; // Menü ikonu görünsün
            headerButtons.style.display = 'none'; // Header buttonları gizle
        } else {
            menuIcon.style.display = 'none'; // Menü ikonu gizlensin
            headerButtons.style.display = 'flex'; // Header buttonları yan yana görünsün
        }
    }

    requestDemoButton.addEventListener('click', function () {
        alert('Request a Demo butonuna tıklandı!');
        // Burada buton tıklama olayına bağlı yapılacak diğer işlemleri ekleyebilirsiniz
    });

    // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde kontrol et
    adjustMenuIconVisibility();
    window.addEventListener('resize', adjustMenuIconVisibility);
});
