const body = document.querySelector("body")
const button = document.querySelector("button")
const color = [
    "pink",
    "blue",
    "red",
    "yellow",
    "light red",
    "green",
    "purple",
];

button.addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
    // rastgele bir renk

    //  const rastgeleSayi = Math.floor(Math.random() * color.length);
    // const secilenRenk = color[rastgeleSayi];
    // console.log(rastgeleSayi, secilenRenk);
    //  body.style.backgroundColor = secilenRenk;

    // sırayla arkaplan rengi seç

    if (sıra == 7) sıra = 0
    const secilenRenk = color[sıra]
    sıra++;
    body.style.backgroundColor = secilenRenk;
}