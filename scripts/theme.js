const btnConfig = document.querySelector(".fa-cog");
const themeMenu = document.querySelector(".themeMenu");
const linkTheme = document.getElementById("linkTheme");
let themeActual = "themeGreen";
let estadoThemeMenu = false   /* false = CERRADO  |  true = ABIERTO */

function themeMenuOpenClose() {
    event.stopPropagation();
    if (estadoThemeMenu) {
        themeMenu.className = "themeMenu";
        themeMenu.style.display = "none";
        estadoThemeMenu = false;
    } else {
        themeMenu.className = "themeMenu menuAbierto";
        themeMenu.style.display = "block"
        estadoThemeMenu = true;
    }
}

function cambiarTheme(themeSeleccionado){
    event.stopPropagation();
    if (themeActual !== themeSeleccionado) {
        linkTheme.href = "./styles/" + themeSeleccionado + ".css";
        themeActual = themeSeleccionado;
    }
};

themeMenu.addEventListener("mouseleave", function () {
    this.style.display = "none";
    estadoThemeMenu = false;
})

document.querySelector(".theme").addEventListener("click", function(){
    themeMenu.style.display = "none";
    estadoThemeMenu = false;
})