const titles = [
    "killsec.lol",
    "invite only biolink",
    "K1LL",
    "OXY"
];

let index = 0;

function updateTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}

setInterval(updateTitle, 200);