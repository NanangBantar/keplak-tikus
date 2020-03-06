const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const mulai = document.getElementById('Start');
const skor = document.getElementById('papan-skor');

let tanahBefore;
let selesai;
let nilaiskor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];

    if (tRandom == tanahBefore) {
        randomTanah(tanah);
    }

    tanahBefore = tRandom;
    return tRandom;
}

function waktuRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function tikusmuncul() {
    const tRandom = randomTanah(tanah);
    const wRandom = waktuRandom(300, 1000);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            tikusmuncul();
        }
    }, wRandom);

}

function pukulintikus() {
    nilaiskor++;
    this.parentNode.classList.remove('muncul');
    skor.innerHTML = nilaiskor;
}

mulai.addEventListener('click', function () {
    selesai = false;
    nilaiskor = 0;
    tikusmuncul();
    setTimeout(() => {
        selesai = true;
    }, 10000);
    skor.innerHTML = 0;
});

tikus.forEach(t => {
    t.addEventListener('click', pukulintikus);
});

