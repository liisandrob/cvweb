const urlFallout3 = "https://open.spotify.com/embed/playlist/00TyqfoZEj7M7BEs9fmthZ";
const urlFalloutNV = "https://open.spotify.com/embed/playlist/6GefCJPMmNQhstbWytWSPh";
const urlFallout4 = "https://open.spotify.com/embed/playlist/1Bz8Xqf5g7I98wEYAfI2Ev";
const urlFallout76 = "https://open.spotify.com/embed/playlist/57LsyX2aSg5n8v9LMRYYnC";
const btnFallout3 = document.getElementById("fallout3");
const btnFalloutNV = document.getElementById("falloutNV");
const btnFallout4 = document.getElementById("fallout4");
const btnFallout76 = document.getElementById("fallout76");
const radio = document.querySelector("iframe");
let radioActual = "falloutNV"

function cambiarRadio (juego) {
    if (radioActual !== juego) {
        radioActual = juego;
        document.querySelector(".radioSelected").className = "radioUnselected";
        switch (juego) {
            case "fallout3":
                radio.src = urlFallout3;
                btnFallout3.className = "radioSelected";
                break;
            case "falloutNV":
                radio.src = urlFalloutNV;
                btnFalloutNV.className = "radioSelected";
                break;
            case "fallout4":
                radio.src = urlFallout4;
                btnFallout4.className = "radioSelected";
                break;
            case "fallout76":
                radio.src = urlFallout76;
                btnFallout76.className = "radioSelected";
                break;
        }
    }
}

function stopRadio() {
    switch(radioActual) {
        case "fallout3":
            radio.src = urlFallout3;
            break;
        case "falloutNV":
            radio.src = urlFalloutNV;
            break;
        case "fallout4":
            radio.src = urlFallout4;
            break;
        case "fallout76":
            radio.src = urlFallout76;
            break;
    }
};
