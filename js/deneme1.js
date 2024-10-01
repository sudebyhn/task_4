document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    const menuClose = document.getElementById('menu-close');
    const headerButtons = document.querySelector('.header-buttons');
    const requestDemoButton = document.querySelector('.header-button-request-demo');

    // Başlangıçta mobil menü ve overlay gizlenmiş olmalı
    mobileMenu.style.display = 'none';
    overlay.style.display = 'none';

    // Menü açma
    menuIcon.addEventListener('click', function () {
        mobileMenu.style.display = 'flex';
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
