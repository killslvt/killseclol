// Sparkle Animation Code
var color = "pink",
    sparkles = 50,
    x = (ox = 400),
    y = (oy = 300),
    swide = 800,
    shigh = 600,
    sleft = (sdown = 0),
    tiny = [],
    star = [],
    starv = [],
    starx = [],
    stary = [],
    tinyx = [],
    tinyy = [],
    tinyv = [];

function sparkle() {
    var t;
    if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
        ox = x;
        oy = y;
        for (t = 0; t < sparkles; t++) {
            if (!starv[t]) {
                star[t].style.left = (starx[t] = x) + "px";
                star[t].style.top = (stary[t] = y + 1) + "px";
                star[t].style.clip = "rect(0px, 5px, 5px, 0px)";
                star[t].childNodes[0].style.backgroundColor = star[t].childNodes[1].style.backgroundColor = color;
                star[t].style.visibility = "visible";
                starv[t] = 50;
                break;
            }
        }
    }

    for (t = 0; t < sparkles; t++) {
        if (starv[t]) update_star(t);
        if (tinyv[t]) update_tiny(t);
    }

    setTimeout(sparkle, 40);
}

function update_star(t) {
    if (--starv[t] == 25) {
        star[t].style.clip = "rect(1px, 4px, 4px, 1px)";
    }

    if (starv[t]) {
        stary[t] += 1 + 3 * Math.random();
        starx[t] += ((t % 5) - 2) / 5;

        if (stary[t] >= shigh + sdown) {
            star[t].style.visibility = "hidden";
            starv[t] = 0;
        } else {
            star[t].style.top = stary[t] + "px";
            star[t].style.left = starx[t] + "px";
        }
    } else {
        tinyv[t] = 50;
        tiny[t].style.top = (tinyy[t] = stary[t]) + "px";
        tiny[t].style.left = (tinyx[t] = starx[t]) + "px";
        tiny[t].style.width = "2px";
        tiny[t].style.height = "2px";
        tiny[t].style.backgroundColor = star[t].childNodes[0].style.backgroundColor;
        star[t].style.visibility = "hidden";
        tiny[t].style.visibility = "visible";
    }
}

function update_tiny(t) {
    if (--tinyv[t] == 25) {
        tiny[t].style.width = "1px";
        tiny[t].style.height = "1px";
    }

    if (tinyv[t]) {
        tinyy[t] += 1 + 3 * Math.random();
        tinyx[t] += ((t % 5) - 2) / 5;

        if (tinyy[t] >= shigh + sdown) {
            tiny[t].style.visibility = "hidden";
            tinyv[t] = 0;
        } else {
            tiny[t].style.top = tinyy[t] + "px";
            tiny[t].style.left = tinyx[t] + "px";
        }
    } else {
        tiny[t].style.visibility = "hidden";
    }
}

function mouse(e) {
    e = e || window.event;
    y = e.pageY || e.clientY + document.body.scrollTop;
    x = e.pageX || e.clientX + document.body.scrollLeft;
}

function scroll() {
    sdown = window.pageYOffset || document.documentElement.scrollTop;
    sleft = window.pageXOffset || document.documentElement.scrollLeft;
}

function width() {
    swide = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth || 800;
    shigh = document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight || 600;
}

function createDiv(h, w) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = h + "px";
    div.style.width = w + "px";
    div.style.overflow = "hidden";
    return div;
}

function getRandomColor() {
    var r = 255,
        g = Math.floor(256 * Math.random()),
        b = Math.floor(Math.random() * (256 - g / 2));
    var colors = [r, g, b];
    colors.sort(function () {
        return 0.5 - Math.random();
    });
    return "rgb(" + colors.join(", ") + ")";
}

window.onload = function () {
    if (document.getElementById) {
        for (var t = 0; t < sparkles; t++) {
            tiny[t] = createDiv(3, 3);
            tiny[t].style.visibility = "hidden";
            tiny[t].style.zIndex = "999";
            document.body.appendChild(tiny[t]);
            starv[t] = 0;
            tinyv[t] = 0;

            star[t] = createDiv(5, 5);
            star[t].style.backgroundColor = "transparent";
            star[t].style.visibility = "hidden";
            star[t].style.zIndex = "999";

            var n = createDiv(1, 5);
            var i = createDiv(5, 1);
            star[t].appendChild(n);
            star[t].appendChild(i);
            n.style.top = "2px";
            n.style.left = "0px";
            i.style.top = "0px";
            i.style.left = "2px";

            document.body.appendChild(star[t]);
        }
        width();
        sparkle();
    }
};

document.onmousemove = mouse;
window.onscroll = scroll;
window.onresize = width;
