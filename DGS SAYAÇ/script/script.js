let h1 = document.querySelector('#heading');
let p = document.querySelector('#paragraph');
let tarih = new Date();
let Dgs = document.querySelector('#dgs');

//KULLANICIYA HİTAP ETME

alert("Merhaba sınav sürecinde olan öğrenciler için DGS'ye  kaç gün kaldığını öğrenebilirisin!");

let ad = prompt("Lütfen size hitap etmek için adınızı giriniz: ");

h1.innerHTML = "Merhaba " + ad + "!";
//SÜRE HESAPLAMA

function DGS() {
    const targetDate = new Date("2025-07-20T10:15:00").getTime();

    const Süre = setInterval(() => {

        const now = new Date().getTime();

        const timeLeft = targetDate - now;
        console.log(now);
        const gün = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const saat = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const dakika = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const saniye = Math.floor((timeLeft % (1000 * 60)) / 1000);
        p.innerHTML = `DGS sınavına ${gün} gün ${saat} saat ${dakika} dakika ${saniye} saniye kaldı!`;

        if (timeLeft < 0) {
            clearInterval(Süre);
            p.innerHTML = "Sınav başladı!";

        }
    }, 1000)
};

DGS();























