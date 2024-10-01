
/* Tüm Section1 için ayar */
.section1 {
    background-color: #f4f4f4;

    display: flex; /* Elemanları yatayda hizalamak için flex kullanıyoruz */
    justify-content: space-between; /* İki kolon arasına boşluk bırak */
    align-items: center; /* Elemanları üstten hizala */
    width: 100vw; /* Genişliği tam ekran yap */
    height: 100vh; /* Yükseklik tam ekran */
    box-sizing: border-box; /* Padding ve border'ı genişliğe dahil et */
  
}
.common-container-section1{
    
}
/* Sol Kısım (Form ve Metinler) */
.form-container {
    width: 50%; /* Sol tarafın genişliği %50 */
    display: flex;
    flex-direction: column; /* Elemanları dikey hizala */
    justify-content: center; /* İçerikleri ortala */
    align-items: flex-start; /* İçerikleri sola hizala */
    box-sizing: border-box;
    margin-left:  13vw; /* Sol ve sağ için 10vw boşluk */
    margin-top:4.5vw;
    line-height: 70px;
}



/* Baş yazı */
        .headline {
            box-sizing: border-box; /* Kutunun boyutlandırılmasını ayarla */
            color: rgb(47, 79, 79); /* Yazı rengi */
            font-family: 'Lato', sans-serif; /* Yazı tipi */
            font-weight: 600; /* Yazı kalınlığı */
            font-size: 48px; /* Yazı boyutu */
        /*  height: 376px; /* Yükseklik */

            letter-spacing: normal; /* Harfler arasındaki boşluk */
        
            text-align: left; /* Metni sola hizala */
            text-size-adjust: 100%; /* Metin boyutunu ayarla */
            
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* Dokunma vurgusunu kaldır */
        }

    @media (max-width: 600px) {
        .headline {
            font-size: 36px; /* Daha küçük bir yazı boyutu */
            width: 100%; /* Genişliği %100 yap */
        }
    }
/* Paragraf Metin Ayarları */
.paragraph-text {
    font-size: 1.5rem; /* Dinamik font boyutu */
    font-weight: 600; /* Normal yazı kalınlığı */
    color: rgb(47, 79, 79); /* Yazı rengi */
    line-height: 1.6; /* Satır yüksekliği */
    text-align: left; /* Sol hizalı */
}
@media (max-width: 600px) {
    .paragraph-text {
        font-size: 1.2rem; /* Daha küçük bir font boyutu */
    }
}

.email-form-container {
    display: flex; /* Elemanları yan yana hizalamak için flexbox */
    align-items: center; /* Dikey hizalama */
    gap: 16px; /* Input ile buton arasında boşluk */ 
    width: 100%; /* Genişliği container kadar genişlet */

    justify-content: flex-start; /* Sol hizalama */

}
.input-text {
    text-align: start; /* Metni sola hizala */

    box-sizing: content-box; /* İçerik kutusu boyutlandırma */
    color: rgb(66, 66, 66); /* Yazı rengi */
    font-family: Lato; /* Yazı tipi */
    font-size: 20px; /* Yazı boyutu */
    font-weight: 400; /* Yazı kalınlığı */
    height: 28.75px; /* Yükseklik */
    padding: 12px; /* İçerik dolgusu */
    width: 232px; /* Genişlik */
    text-align: start; /* Metni sola hizala */
    overflow: hidden; /* Taşmayı gizle */
    text-overflow: ellipsis; /* Taşan metni üç nokta ile göster */
    border-radius: 4px; /* Köşe yuvarlama */
  
    border: 1px solid #333; /* Çerçeve kalınlığı, stili ve rengi */
}


.request-demo-button {
    display: flex; /* Esnek düzen */
    justify-content: center; /* İçerikleri yatayda ortala */
    align-items: center; /* Dikeyde ortala */

    width: 209.775px; /* Genişlik sabit kalsın */
    height: 54px; /* Yükseklik */
    padding: 12px 32px; /* İçerik boşluğu */
    background-color: rgb(0, 123, 255); /* Arka plan rengi */
    color: rgb(255, 255, 255); /* Yazı rengi */
    font-family: 'Lato', sans-serif; /* Yazı tipi */
    font-size: 20px; /* Yazı boyutu */
    font-weight: 600; /* Yazı kalınlığı */
    border: none; /* Kenarlık kaldır */
    border-radius: 4px; /* Kenar yuvarlama */
    cursor: pointer; /* İmleç */
    margin-bottom: 5px; /* Üst boşluk */
    margin-left: -8px; /* Sol boşluk */
}

/* Sağ Kısım (Resim) */
.image-container {
    width: 50%; /* Sağ tarafın genişliği %50 */
    display: flex;
    justify-content: center; /* Yatayda ortala */
    align-items: center; /* Dikeyde ortala */
    box-sizing: border-box;
    margin-right: 7.4vw; /* Sol ve sağ için 10vw boşluk */
    margin-top:4.5vw;
    flex-basis: 41.6667%;
    font-weight: 400;
    height: 419.5px;
    line-height: 24px;
    padding-top: 32px;
    text-align :left;
    text-size-adjust: 100%;
    unicode-bidi: isolate;
    width: 387.5px;
}

.image-container img {
    height: auto; /* Oranlarını koruyarak yüksekliği ayarla */
    border-radius: 10px; /* Kenarları yuvarla */
    font-size: 16px;
    font-weight: 400px;
    text-size-adjust :100%;
    line-height: 24px;
    vertical-align : middle;
}


























.section2 {
    background-color: #000080; /* Turuncu tonları */
}

.section3 {
    background-color: #f4f4f4; /* Yeşil tonları */
}

.section4 {
    background-color: #000080; /* Pembe tonları */
}

.section5 {
    background-color: #f4f4f4; /* Mor tonları */
}

.section6 {
    background-color: #000080; /* Gri tonları */
}

.section7 {
    background-color: #f4f4f4; /* Açık mavi tonları */
}

.section8 {
    background-color: #000080; /* Açık pembe tonları */
}



"# task_4" 
