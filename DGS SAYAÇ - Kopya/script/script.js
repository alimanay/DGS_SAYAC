let h1 = document.querySelector("#heading");
let p = document.querySelector("#paragraph");

const examDates = {
    DGS: "2025-07-20T10:15:00",
    KPSS: "2025-09-01T09:00:00",
    ALES: "2025-11-10T10:00:00",
    "TYT-AYT": "2025-06-15T08:30:00",
    MSÜ: "2025-07-25T09:00:00"
};
alert("Merhaba Siteye Hoşgeldiniz. Sınav tarihlerini görmek için sınav adlarına tıklayınız.");

let interval;

function startCountdown(sinav) {

    clearInterval(interval);

    if (examDates[sinav]) {
        const targetDate = new Date(examDates[sinav]).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            const gün = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const saat = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const dakika = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const saniye = Math.floor((timeLeft % (1000 * 60)) / 1000);

            h1.innerHTML = sinav + " Sayaç";
            p.innerHTML = `${sinav} sınavına ${gün} gün ${saat} saat ${dakika} dakika ${saniye} saniye kaldı!`;

            if (timeLeft < 0) {
                clearInterval(interval);
                p.innerHTML = `${sinav} sınavı başladı!`;
            }
        }, 1000);
    } else {
        p.innerHTML = "Seçilen sınav için tarih bulunamadı!";
    }
}

// **Menüdeki tüm linkleri seç ve tıklama olaylarını ekle**
document.querySelectorAll(".sinav-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let selectedExam = this.getAttribute("data-sinav");
        startCountdown(selectedExam);
    });
});
